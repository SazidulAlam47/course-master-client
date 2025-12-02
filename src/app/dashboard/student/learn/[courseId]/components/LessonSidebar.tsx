'use client';

import { Progress } from '@/components/ui/progress';
import LessonItem from './LessonItem';

export type Lesson = {
    id: string;
    title: string;
    duration: string;
    videoId: string;
    isCompleted: boolean;
};

export type Module = {
    id: string;
    title: string;
    lessons: Lesson[];
};

type LessonSidebarProps = {
    modules: Module[];
    currentLessonId: string;
    completedLessons: string[];
    totalLessons: number;
    onLessonSelect: (lesson: Lesson) => void;
};

const LessonSidebar = ({
    modules,
    currentLessonId,
    completedLessons,
    totalLessons,
    onLessonSelect,
}: LessonSidebarProps) => {
    const completedCount = completedLessons.length;
    const progressPercentage = Math.round(
        (completedCount / totalLessons) * 100
    );

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {modules.map((module) => (
                <div key={module.id}>
                    <div className="bg-[#1b7ad2] text-white p-4 flex gap-1.5 items-center justify-between">
                        <h3 className="font-semibold text-sm">
                            Course Content
                        </h3>
                        <Progress
                            value={progressPercentage}
                            className="w-1/2 h-2.5 bg-blue-400 [&>[data-slot=progress-indicator]]:bg-white"
                        />
                        <p className="text-xs font-medium">
                            {completedCount}/{totalLessons}
                        </p>
                    </div>

                    <div className="max-h-[500px] overflow-y-auto">
                        {module.lessons.map((lesson, index) => {
                            const isActive = lesson.id === currentLessonId;
                            const isCompleted = completedLessons.includes(
                                lesson.id
                            );

                            return (
                                <LessonItem
                                    key={lesson.id}
                                    lesson={lesson}
                                    index={index}
                                    isActive={isActive}
                                    isCompleted={isCompleted}
                                    onSelect={onLessonSelect}
                                />
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LessonSidebar;
