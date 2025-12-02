'use client';

import { Progress } from '@/components/ui/progress';
import LessonItem from './LessonItem';
import { Lesson } from '@/types/course.type';

type LessonSidebarProps = {
    lessons: Lesson[];
    currentLessonIndex: number;
    completedLessonsIndex: number;
    totalLessons: number;
    onLessonSelect: (index: number) => void;
};

const LessonSidebar = ({
    lessons,
    currentLessonIndex,
    completedLessonsIndex,
    totalLessons,
    onLessonSelect,
}: LessonSidebarProps) => {
    const progressPercentage = Math.round(
        (completedLessonsIndex / totalLessons) * 100
    );

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-[#1b7ad2] text-white p-4 flex gap-1.5 items-center justify-between">
                <h3 className="font-semibold text-sm">Course Content</h3>
                <Progress
                    value={progressPercentage}
                    className="w-1/2 h-2.5 bg-blue-400 [&>[data-slot=progress-indicator]]:bg-white"
                />
                <p className="text-xs font-medium">
                    {completedLessonsIndex}/{totalLessons}
                </p>
            </div>

            <div className="max-h-[500px] overflow-y-auto">
                {lessons.map((lesson, index) => {
                    const isActive = index === currentLessonIndex;
                    const isCompleted = index < completedLessonsIndex;
                    const isLocked = index > completedLessonsIndex;

                    return (
                        <LessonItem
                            key={index}
                            lesson={lesson}
                            index={index}
                            isActive={isActive}
                            isCompleted={isCompleted}
                            isLocked={isLocked}
                            onSelect={() => onLessonSelect(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default LessonSidebar;
