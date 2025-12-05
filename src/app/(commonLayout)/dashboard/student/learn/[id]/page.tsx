'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import VideoPlayer from './components/VideoPlayer';
import LessonSidebar from './components/LessonSidebar';
import NavigationButtons from './components/NavigationButtons';
import AssignmentContent from './components/AssignmentContent';
import QuizContent from './components/QuizContent';
import { FaArrowLeft } from 'react-icons/fa6';
import {
    useGetEnrollmentByIdQuery,
    useUpdateEnrollmentCompletedOrderMutation,
} from '@/redux/api/enrollmentApi';
import { useParams } from 'next/navigation';
import Loader from '@/components/shared/Loader';
import { useGetLessonByOrderQuery } from '@/redux/api/lessonApi';
import { toast } from 'sonner';

const LearnPage = () => {
    const params = useParams();
    const id = params.id as string;
    const { data: enrollment, isLoading } = useGetEnrollmentByIdQuery(id);
    const [updateEnrollmentCompletedOrder] =
        useUpdateEnrollmentCompletedOrderMutation();

    const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(
        enrollment?.completedLessonOrder || 0
    );

    const [isNavigatedToCompletedIndex, setIsNavigatedToCompletedIndex] =
        useState(false);

    useEffect(() => {
        if (
            !isNavigatedToCompletedIndex &&
            enrollment?.completedLessonOrder !== undefined
        ) {
            setCurrentLessonIndex(enrollment.completedLessonOrder);
            setIsNavigatedToCompletedIndex(true);
        }
    }, [enrollment?.completedLessonOrder, isNavigatedToCompletedIndex]);

    const { data: currentLesson } = useGetLessonByOrderQuery(
        currentLessonIndex + 1
    );

    const allLessons = enrollment?.lessons || [];
    const completedLessonsIndex = enrollment?.completedLessonOrder || 0;

    const totalLessons = allLessons.length;

    const handleLessonSelect = (index: number) => {
        setCurrentLessonIndex(index);
    };

    const handlePrevious = () => {
        setCurrentLessonIndex(currentLessonIndex - 1);
    };

    const handleNext = () => {
        setCurrentLessonIndex(currentLessonIndex + 1);
    };

    const handleMarkComplete = async () => {
        const toastId = toast.loading('Marking lesson as complete...');
        try {
            const newCompletedIndex = completedLessonsIndex + 1;
            await updateEnrollmentCompletedOrder(id).unwrap();
            toast.success('Lesson marked as complete!', { id: toastId });
            if (newCompletedIndex < allLessons.length) {
                setCurrentLessonIndex(newCompletedIndex);
            }
        } catch (error: any) {
            toast.error('Failed to update lesson progress. Please try again.', {
                id: toastId,
            });
            console.error('Failed to update lesson progress:', error);
        }
    };

    const isCurrentCompleted = currentLessonIndex < completedLessonsIndex;
    const hasPrevious = currentLessonIndex > 0;
    const hasNext = currentLessonIndex < allLessons.length - 1;

    const canMarkComplete = useMemo(() => {
        if (!currentLesson) return false;
        if (currentLessonIndex !== completedLessonsIndex) return false;
        return currentLesson.type === 'video';
    }, [currentLesson, currentLessonIndex, completedLessonsIndex]);

    const canGoNext = currentLessonIndex < completedLessonsIndex;

    const renderContent = () => {
        if (!currentLesson) return null;

        switch (currentLesson.type) {
            case 'assignment':
                return (
                    <AssignmentContent
                        title={currentLesson.title}
                        task={currentLesson.assignmentTask || ''}
                        isCompleted={isCurrentCompleted}
                    />
                );
            case 'quiz':
                return (
                    <QuizContent
                        lessonId={currentLesson._id}
                        title={currentLesson.title}
                        questions={currentLesson.quizQuestions || []}
                        isCompleted={isCurrentCompleted}
                    />
                );
            default:
                return (
                    <VideoPlayer
                        videoId={currentLesson.videoId || ''}
                        title={`${currentLessonIndex + 1}. ${
                            currentLesson.title
                        }`}
                    />
                );
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-6">
                <div className="mb-6">
                    <Link href="/dashboard/student">
                        <Button
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-white"
                        >
                            <FaArrowLeft className="w-4 h-4 mr-2" />
                            Back to Dashboard
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                        {renderContent()}
                        <NavigationButtons
                            onPrevious={handlePrevious}
                            onNext={handleNext}
                            onMarkComplete={handleMarkComplete}
                            hasPrevious={hasPrevious}
                            hasNext={hasNext}
                            isCurrentCompleted={isCurrentCompleted}
                            canMarkComplete={canMarkComplete}
                            canGoNext={canGoNext}
                        />
                    </div>
                    <div className="lg:col-span-1">
                        <LessonSidebar
                            lessons={allLessons}
                            currentLessonIndex={currentLessonIndex}
                            completedLessonsIndex={completedLessonsIndex}
                            totalLessons={totalLessons}
                            onLessonSelect={handleLessonSelect}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LearnPage;
