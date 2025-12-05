'use client';

import { Progress } from '@/components/ui/progress';
import LessonItem from './LessonItem';
import { ILesson } from '@/types';

type LessonSidebarProps = {
    lessons: ILesson[];
    currentLessonOrder: number;
    completedLessonsOrder: number;
    totalLessons: number;
    onLessonSelect: (index: number) => void;
};

const LessonSidebar = ({
    lessons,
    currentLessonOrder,
    completedLessonsOrder,
    totalLessons,
    onLessonSelect,
}: LessonSidebarProps) => {
    const progressPercentage = Math.round(
        (completedLessonsOrder / totalLessons) * 100
    );

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-[#1b7ad2] text-white p-4 flex gap-1.5 items-center justify-between">
                <h3 className="font-semibold text-sm">Course Content</h3>
                <Progress
                    value={progressPercentage}
                    className="w-1/2 h-2.5 bg-blue-400 *:data-[slot=progress-indicator]:bg-white"
                />
                <p className="text-xs font-medium">
                    {completedLessonsOrder}/{totalLessons}
                </p>
            </div>

            <div className="max-h-[500px] overflow-y-auto">
                {lessons.map((lesson, index) => {
                    const isActive = index === currentLessonOrder;
                    const isCompleted = index < completedLessonsOrder;
                    const isLocked = index > completedLessonsOrder;

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
