'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdQuiz } from 'react-icons/md';
import SingleQuestion from './SingleQuestion';
import { QuizQuestion } from '@/types/course.type';

type QuizContentProps = {
    title: string;
    questions: QuizQuestion[];
    onComplete: (score: number, total: number) => void;
    isCompleted: boolean;
};

const QuizContent = ({
    title,
    questions,
    onComplete,
    isCompleted,
}: QuizContentProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<{
        [key: number]: string;
    }>({});
    const [isSubmitted, setIsSubmitted] = useState(isCompleted);
    const [score, setScore] = useState(0);

    const handleSelectAnswer = (questionIndex: number, value: string) => {
        if (isSubmitted) return;
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: value,
        }));
    };

    const handleSubmit = () => {
        let correctCount = 0;
        questions.forEach((question, index) => {
            const selectedIndex = parseInt(selectedAnswers[index]);
            if (selectedIndex === question.correctAnswer) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setIsSubmitted(true);
        onComplete(correctCount, questions.length);
    };

    const allAnswered = questions.every(
        (_, index) => selectedAnswers[index] !== undefined
    );

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center gap-3">
                    <MdQuiz className="w-6 h-6 text-[#1b7ad2]" />
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                </div>
            </div>

            <div className="p-6">
                {isSubmitted && (
                    <div className="bg-[#1b7ad2]/10 border border-[#1b7ad2]/30 rounded-lg p-4 mb-6 text-center">
                        <p className="text-[#1b7ad2] font-bold text-lg">
                            Your Score: {score}/{questions.length}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                            {score === questions.length
                                ? 'Perfect! Great job!'
                                : score >= questions.length / 2
                                ? 'Good work! Keep learning!'
                                : 'Keep practicing, you can do better!'}
                        </p>
                    </div>
                )}

                <div className="space-y-6">
                    {questions.map((question, qIndex) => (
                        <SingleQuestion
                            key={qIndex}
                            question={question}
                            questionIndex={qIndex}
                            selectedValue={selectedAnswers[qIndex]}
                            onSelectAnswer={handleSelectAnswer}
                            isSubmitted={isSubmitted}
                        />
                    ))}
                </div>

                {!isSubmitted && (
                    <div className="flex justify-end mt-6">
                        <Button
                            onClick={handleSubmit}
                            disabled={!allAnswered}
                            className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white px-6"
                        >
                            Submit Quiz
                        </Button>
                    </div>

                    //                     <Dialog>
                    //   <DialogTrigger>Open</DialogTrigger>
                    //   <DialogContent>
                    //     <DialogHeader>
                    //       <DialogTitle>Are you absolutely sure?</DialogTitle>
                    //       <DialogDescription>
                    //         This action cannot be undone. This will permanently delete your account
                    //         and remove your data from our servers.
                    //       </DialogDescription>
                    //     </DialogHeader>
                    //   </DialogContent>
                    // </Dialog>
                )}
            </div>
        </div>
    );
};

export default QuizContent;
