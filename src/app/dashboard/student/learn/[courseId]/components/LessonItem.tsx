'use client';

import { FaCircleCheck, FaCirclePlay } from 'react-icons/fa6';
import { MdOutlineAccessTime, MdAssignment, MdQuiz } from 'react-icons/md';
import { Lesson } from './LessonSidebar';

type LessonItemProps = {
    lesson: Lesson;
    index: number;
    isActive: boolean;
    isCompleted: boolean;
    isLocked: boolean;
    onSelect: () => void;
};

const LessonItem = ({
    lesson,
    index,
    isActive,
    isCompleted,
    isLocked,
    onSelect,
}: LessonItemProps) => {
    const getIcon = () => {
        if (isCompleted) {
            return <FaCircleCheck className="w-5 h-5 text-green-500" />;
        }

        const iconClass = `w-5 h-5 ${
            isLocked
                ? 'text-gray-300'
                : isActive
                ? 'text-[#1b7ad2]'
                : 'text-gray-400'
        }`;

        switch (lesson.type) {
            case 'assignment':
                return <MdAssignment className={iconClass} />;
            case 'quiz':
                return <MdQuiz className={iconClass} />;
            default:
                return <FaCirclePlay className={iconClass} />;
        }
    };

    const getTypeLabel = () => {
        switch (lesson.type) {
            case 'assignment':
                return 'Assignment';
            case 'quiz':
                return 'Quiz';
            default:
                return lesson.duration;
        }
    };

    return (
        <button
            onClick={() => !isLocked && onSelect()}
            disabled={isLocked}
            className={`w-full text-left p-4 border-b border-gray-100 transition-all duration-200 ${
                isLocked
                    ? 'opacity-50 cursor-not-allowed bg-gray-50'
                    : 'hover:bg-gray-50 cursor-pointer'
            } ${
                isActive ? 'bg-[#1b7ad2]/10 border-l-4 border-l-[#1b7ad2]' : ''
            }`}
        >
            <div className="flex items-start gap-3">
                <div className="mt-0.5">{getIcon()}</div>
                <div className="flex-1">
                    <h4
                        className={`text-sm font-medium leading-tight ${
                            isLocked
                                ? 'text-gray-400'
                                : isActive
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
                        <span className="text-xs">{getTypeLabel()}</span>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default LessonItem;
