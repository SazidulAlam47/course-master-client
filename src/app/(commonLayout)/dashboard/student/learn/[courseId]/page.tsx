'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import VideoPlayer from './components/VideoPlayer';
import LessonSidebar from './components/LessonSidebar';
import NavigationButtons from './components/NavigationButtons';
import AssignmentContent from './components/AssignmentContent';
import QuizContent from './components/QuizContent';
import { FaArrowLeft } from 'react-icons/fa6';
import { Lesson } from '@/types';

const lessonsData: Lesson[] = [
    {
        title: 'How to access the course',
        duration: '12 min',
        type: 'video',
        videoId: 'dQw4w9WgXcQ',
    },
    {
        title: 'How To Practice And Build Your Own',
        duration: '10 min',
        type: 'video',
        videoId: 'tVzUXW6siu0',
    },
    {
        title: 'Assignment 1',
        duration: '',
        type: 'assignment',
        task: 'https://drive.google.com/drive/folders/19hcFwr3WShODOfR7hXJ1oQogs5LKDX8L?usp=sharing',
    },
    {
        title: 'how to get support effectively',
        duration: '15 min',
        type: 'video',
        videoId: 'tVzUXW6siu0',
    },
    {
        title: 'HTML Quiz',
        duration: '',
        type: 'quiz',
        questions: [
            {
                question: 'What does HTML stand for?',
                options: [
                    'Hyper Text Markup Language',
                    'Hyperlink and Text Markup Language',
                    'Home Tool Markup Language',
                    'Hyperlink Text Manager Link',
                ],
                correctAnswer: 0,
            },
            {
                question: 'Which HTML tag is used to define a paragraph?',
                options: ['<para>', '<p>', '<paragraph>', '<pg>'],
                correctAnswer: 1,
            },
            {
                question:
                    'Which tag is used to display the largest heading in HTML?',
                options: ['<h6>', '<head>', '<h1>', '<heading>'],
                correctAnswer: 2,
            },
            {
                question:
                    'What is the correct HTML tag for inserting a line break?',
                options: ['<lb>', '<break>', '<br>', '<line>'],
                correctAnswer: 2,
            },
        ],
    },
    {
        title: '(mac user only) Install Visual Studio Code Node Git SCM And Github Account',
        duration: '15 min',
        type: 'video',
        videoId: 'tVzUXW6siu0',
    },
    {
        title: 'VS Code Extensions And Settings',
        duration: '10 min',
        type: 'video',
        videoId: 'tVzUXW6siu0',
    },
    {
        title: 'Introduction To HTML',
        duration: '18 min',
        type: 'video',
        videoId: 'tVzUXW6siu0',
    },
    {
        title: 'HTML Basic Structure And Tags',
        duration: '20 min',
        type: 'video',
        videoId: 'tVzUXW6siu0',
    },
];

const LearnPage = () => {
    const fetchedCurrentLessonIndex = 4;

    const [completedLessonsIndex, setCompletedLessonsIndex] = useState<number>(
        fetchedCurrentLessonIndex || 0
    );

    const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(
        fetchedCurrentLessonIndex || 0
    );

    const allLessons = lessonsData;

    const totalLessons = allLessons.length;
    const currentLesson = allLessons[currentLessonIndex];

    const handleLessonSelect = (index: number) => {
        setCurrentLessonIndex(index);
    };

    const handlePrevious = () => {
        setCurrentLessonIndex(currentLessonIndex - 1);
    };

    const handleNext = () => {
        setCurrentLessonIndex(currentLessonIndex + 1);
    };

    const handleMarkComplete = () => {
        setCompletedLessonsIndex(completedLessonsIndex + 1);
        if (completedLessonsIndex < lessonsData.length - 1) {
            setCurrentLessonIndex(completedLessonsIndex + 1);
        }
    };

    const handleAssignmentSubmit = (answer: string) => {
        console.log('Assignment submitted:', answer);
        setCompletedLessonsIndex(completedLessonsIndex + 1);
    };

    const handleQuizComplete = (score: number, total: number) => {
        console.log(`Quiz completed: ${score}/${total}`);
        setCompletedLessonsIndex(completedLessonsIndex + 1);
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
                        task={currentLesson.task || ''}
                        onSubmit={handleAssignmentSubmit}
                        isCompleted={isCurrentCompleted}
                    />
                );
            case 'quiz':
                return (
                    <QuizContent
                        title={currentLesson.title}
                        questions={currentLesson.questions || []}
                        onComplete={handleQuizComplete}
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
                            lessons={lessonsData}
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
