'use client';

import { FaCircleCheck, FaCirclePlay } from 'react-icons/fa6';
import { MdOutlineAccessTime } from 'react-icons/md';
import { Lesson } from './LessonSidebar';

type LessonItemProps = {
    lesson: Lesson;
    index: number;
    isActive: boolean;
    isCompleted: boolean;
    onSelect: (lesson: Lesson) => void;
};

const LessonItem = ({
    lesson,
    index,
    isActive,
    isCompleted,
    onSelect,
}: LessonItemProps) => {
    return (
        <button
            onClick={() => onSelect(lesson)}
            className={`w-full text-left p-4 border-b border-gray-100 transition-all duration-200 hover:bg-gray-50 cursor-pointer ${
                isActive ? 'bg-[#1b7ad2]/10 border-l-4 border-l-[#1b7ad2]' : ''
            }`}
        >
            <div className="flex items-start gap-3">
                <div className="mt-0.5">
                    {isCompleted ? (
                        <FaCircleCheck className="w-5 h-5 text-green-500" />
                    ) : (
                        <FaCirclePlay
                            className={`w-5 h-5 ${
                                isActive ? 'text-[#1b7ad2]' : 'text-gray-400'
                            }`}
                        />
                    )}
                </div>
                <div className="flex-1">
                    <h4
                        className={`text-sm font-medium leading-tight ${
                            isActive
                                ? 'text-[#1b7ad2]'
                                : isCompleted
                                ? 'text-gray-600'
                                : 'text-gray-800'
                        }`}
                    >
                        {index + 1}. {lesson.title}
                    </h4>
                    <div className="flex items-center gap-1 mt-1 text-gray-500">
                        <MdOutlineAccessTime className="w-3.5 h-3.5" />
                        <span className="text-xs">{lesson.duration}</span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default LessonItem;
