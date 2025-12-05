'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MdQuiz } from 'react-icons/md';
import SingleQuestion from './SingleQuestion';
import { IQuizQuestion } from '@/types';
import Swal from 'sweetalert2';
import {
    useCreateQuizAttemptMutation,
    useGetQuizAttemptByLessonIdQuery,
} from '@/redux/api/quizAttemptApi';
import { toast } from 'sonner';
import { is } from 'zod/v4/locales';
import Loader from '@/components/shared/Loader';

type QuizContentProps = {
    lessonId: string;
    title: string;
    questions: IQuizQuestion[];

    isCompleted: boolean;
};

const QuizContent = ({
    lessonId,
    title,
    questions,

    isCompleted,
}: QuizContentProps) => {
    const [selectedAnswers, setSelectedAnswers] = useState<{
        [key: number]: string;
    }>({});
    const [isSubmitted, setIsSubmitted] = useState(isCompleted);
    const [score, setScore] = useState(0);

    const [createQuizAttempt] = useCreateQuizAttemptMutation();
    const { data: quizAttempt, isLoading } =
        useGetQuizAttemptByLessonIdQuery(lessonId);

    useEffect(() => {
        if (quizAttempt) {
            const answersStrArray = quizAttempt.submittedAnswers.map((ans) =>
                ans.toString()
            );
            const selectedAnsObj: { [key: number]: string } = Object.assign(
                {},
                answersStrArray
            );
            setSelectedAnswers(selectedAnsObj);
            setScore(quizAttempt.score);
            setIsSubmitted(true);
        }
    }, [quizAttempt]);

    const handleSelectAnswer = (questionIndex: number, value: string) => {
        if (isSubmitted) return;
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: value,
        }));
    };

    const handleSubmit = async () => {
        const toastId = toast.loading('Submitting quiz...');
        try {
            const submittedAnswers = Object.values(selectedAnswers).map((ans) =>
                parseInt(ans)
            );
            const payload = {
                lessonId,
                submittedAnswers,
            };
            const res = await createQuizAttempt(payload).unwrap();

            setScore(res.score);
            setIsSubmitted(true);

            toast.success('Quiz submitted successfully!', { id: toastId });

            Swal.fire({
                title: 'Quiz Completed',
                icon: 'success',
                html: `
                    <div class='space-y-2'>
                        <div>
                            <span class="font-semibold">Quiz:</span>
                            ${title}
                        </div>
                        <div>
                            <span class="font-semibold">
                                Your Score:
                            </span>
                            ${res.score}/${questions.length}
                        </div>
                        <p>
                            ${
                                res.score === questions.length
                                    ? 'Perfect! Great job!'
                                    : res.score >= questions.length / 2
                                    ? 'Good work! Keep learning!'
                                    : 'Keep practicing, you can do better!'
                            }
                        </p>
                    </div>
                `,
                focusConfirm: false,
                confirmButtonText: 'Great!',
            });
        } catch (error: any) {
            toast.error('Failed to submit quiz. Please try again.', {
                id: toastId,
            });
            console.error('Failed to submit quiz:', error);
        }
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

            {isLoading ? (
                <Loader />
            ) : (
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
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizContent;
