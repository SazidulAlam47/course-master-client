'use client';

import { useState, useMemo } from 'react';
import Container from '@/components/Container';
import VideoPlayer from './components/VideoPlayer';
import LessonSidebar, { Module, Lesson } from './components/LessonSidebar';
import NavigationButtons from './components/NavigationButtons';

// Mock course data - replace with actual API call
const mockCourseData: Module[] = [
    {
        id: '0',
        title: '0',
        lessons: [
            {
                id: '1',
                title: 'How to access the course',
                duration: '12 min',
                videoId: 'dQw4w9WgXcQ',
                isCompleted: false,
            },
            {
                id: '2',
                title: 'How To Practice And Build Your Own',
                duration: '10 min',
                videoId: 'tVzUXW6siu0',
                isCompleted: false,
            },
            {
                id: '3',
                title: 'Everything You Need To Know About Assignment',
                duration: '12 min',
                videoId: 'dQw4w9WgXcQ',
                isCompleted: false,
            },
            {
                id: '4',
                title: 'how to get support effectively',
                duration: '15 min',
                videoId: 'tVzUXW6siu0',
                isCompleted: false,
            },
            {
                id: '5',
                title: 'Install Visual Studio Code Node Git Scm And Github Account',
                duration: '13 min',
                videoId: 'dQw4w9WgXcQ',
                isCompleted: false,
            },
            {
                id: '6',
                title: '(mac user only) Install Visual Studio Code Node Git SCM And Github Account',
                duration: '15 min',
                videoId: 'tVzUXW6siu0',
                isCompleted: false,
            },
            {
                id: '7',
                title: 'VS Code Extensions And Settings',
                duration: '10 min',
                videoId: 'tVzUXW6siu0',
                isCompleted: false,
            },
            {
                id: '8',
                title: 'Introduction To HTML',
                duration: '18 min',
                videoId: 'tVzUXW6siu0',
                isCompleted: false,
            },
            {
                id: '9',
                title: 'HTML Basic Structure And Tags',
                duration: '20 min',
                videoId: 'tVzUXW6siu0',
                isCompleted: false,
            },
        ],
    },
];

const LearnPage = () => {
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);
    const [currentLessonId, setCurrentLessonId] = useState<string>(
        mockCourseData[0]?.lessons[0]?.id || ''
    );

    // Flatten all lessons for easy navigation
    const allLessons = useMemo(() => {
        return mockCourseData.flatMap((module) => module.lessons);
    }, []);

    const totalLessons = allLessons.length;

    const currentLessonIndex = allLessons.findIndex(
        (lesson) => lesson.id === currentLessonId
    );

    const currentLesson = allLessons[currentLessonIndex];

    const handleLessonSelect = (lesson: Lesson) => {
        setCurrentLessonId(lesson.id);
    };

    const handlePrevious = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonId(allLessons[currentLessonIndex - 1].id);
        }
    };

    const handleNext = () => {
        if (currentLessonIndex < allLessons.length - 1) {
            setCurrentLessonId(allLessons[currentLessonIndex + 1].id);
        }
    };

    const handleMarkComplete = () => {
        if (completedLessons.includes(currentLessonId)) {
            setCompletedLessons((prev) =>
                prev.filter((id) => id !== currentLessonId)
            );
        } else {
            setCompletedLessons((prev) => [...prev, currentLessonId]);
        }
    };

    const isCurrentCompleted = completedLessons.includes(currentLessonId);
    const hasPrevious = currentLessonIndex > 0;
    const hasNext = currentLessonIndex < allLessons.length - 1;

    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                        {currentLesson && (
                            <VideoPlayer
                                videoId={currentLesson.videoId}
                                title={`${currentLessonIndex + 1}. ${
                                    currentLesson.title
                                }`}
                            />
                        )}
                        <NavigationButtons
                            onPrevious={handlePrevious}
                            onNext={handleNext}
                            onMarkComplete={handleMarkComplete}
                            hasPrevious={hasPrevious}
                            hasNext={hasNext}
                            isCurrentCompleted={isCurrentCompleted}
                        />
                    </div>
                    <div className="lg:col-span-1">
                        <LessonSidebar
                            modules={mockCourseData}
                            currentLessonId={currentLessonId}
                            completedLessons={completedLessons}
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
