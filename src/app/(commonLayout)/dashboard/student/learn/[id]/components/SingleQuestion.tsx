'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { QuizQuestion } from '@/types';

type SingleQuestionProps = {
    question: QuizQuestion;
    questionIndex: number;
    selectedValue: string | undefined;
    // eslint-disable-next-line no-unused-vars
    onSelectAnswer: (number, string) => void;
    isSubmitted: boolean;
};

const SingleQuestion = ({
    question,
    questionIndex,
    selectedValue,
    onSelectAnswer,
    isSubmitted,
}: SingleQuestionProps) => {
    const selectedIndex =
        selectedValue !== undefined ? parseInt(selectedValue) : -1;

    return (
        <div className="space-y-3">
            <h3 className="font-medium text-gray-900">
                {questionIndex + 1}. {question.question}
            </h3>
            <RadioGroup
                value={selectedValue}
                onValueChange={(value) => onSelectAnswer(questionIndex, value)}
                disabled={isSubmitted}
                className="space-y-2 pl-4"
            >
                {question.options.map((option, oIndex) => {
                    const isSelected = selectedIndex === oIndex;
                    const isCorrect = question.correctAnswer === oIndex;
                    const showCorrect = isSubmitted && isCorrect;
                    const showWrong = isSubmitted && isSelected && !isCorrect;

                    return (
                        <Label
                            key={oIndex}
                            htmlFor={`q${questionIndex}-${oIndex}`}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                                showCorrect
                                    ? 'bg-green-50 border-green-300'
                                    : showWrong
                                    ? 'bg-red-50 border-red-300'
                                    : isSelected
                                    ? 'bg-[#1b7ad2]/10 border-[#1b7ad2]'
                                    : 'bg-white border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                            <RadioGroupItem
                                value={oIndex.toString()}
                                id={`q${questionIndex}-${oIndex}`}
                                className="text-[#1b7ad2] border-gray-300 data-[state=checked]:border-[#1b7ad2]"
                            />
                            <span
                                className={`text-sm ${
                                    showCorrect
                                        ? 'text-green-700 font-medium'
                                        : showWrong
                                        ? 'text-red-700'
                                        : 'text-gray-700'
                                }`}
                            >
                                {option}
                            </span>
                        </Label>
                    );
                })}
            </RadioGroup>
        </div>
    );
};

export default SingleQuestion;
