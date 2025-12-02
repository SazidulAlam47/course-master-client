'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { IoSend } from 'react-icons/io5';
import Link from 'next/link';
import { MdAssignment } from 'react-icons/md';

type AssignmentContentProps = {
    title: string;
    task: string;
    onSubmit: (answer: string) => void;
    isCompleted: boolean;
};

const AssignmentContent = ({
    title,
    task,
    onSubmit,
    isCompleted,
}: AssignmentContentProps) => {
    const [answer, setAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(isCompleted);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (answer.trim()) {
            onSubmit(answer);
            setIsSubmitted(true);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center gap-3">
                    <MdAssignment className="w-6 h-6 text-[#1b7ad2]" />
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                </div>
            </div>

            <div className="p-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        Assignment Task:
                    </h4>
                    <Link
                        href={task}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1b7ad2] hover:underline break-all"
                    >
                        {task}
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Put your link and description here"
                        disabled={isSubmitted}
                        className="w-full h-40 resize-none focus:ring-2 focus:ring-[#1b7ad2] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    />
                    {!isSubmitted && (
                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={!answer.trim()}
                                className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white px-6"
                            >
                                Submit
                                <IoSend className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AssignmentContent;
