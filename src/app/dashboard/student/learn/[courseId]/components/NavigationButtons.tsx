'use client';

import { Button } from '@/components/ui/button';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa6';

type NavigationButtonsProps = {
    onPrevious: () => void;
    onNext: () => void;
    onMarkComplete: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
    isCurrentCompleted: boolean;
};

const NavigationButtons = ({
    onPrevious,
    onNext,
    onMarkComplete,
    hasPrevious,
    hasNext,
    isCurrentCompleted,
}: NavigationButtonsProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        onClick={onPrevious}
                        disabled={!hasPrevious}
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        onClick={onNext}
                        disabled={!hasNext}
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                        <FaChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>

                <Button
                    onClick={onMarkComplete}
                    className={`${
                        isCurrentCompleted
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-[#1b7ad2] hover:bg-[#1565b8]'
                    } text-white transition-colors`}
                >
                    <FaCheck className="w-4 h-4 mr-2" />
                    {isCurrentCompleted ? 'Completed' : 'Mark as Completed'}
                </Button>
            </div>
        </div>
    );
};

export default NavigationButtons;
