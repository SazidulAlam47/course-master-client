'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdAssignment } from 'react-icons/md';
import Link from 'next/link';
import LForm from '@/components/form/LForm';
import LTextarea from '@/components/form/LTextarea';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import {
    useCreateAssignmentMutation,
    useGetAssignmentByLessonIdQuery,
} from '@/redux/api/assignmentApi';
import Loader from '@/components/shared/Loader';
import { zodResolver } from '@hookform/resolvers/zod';
import { assignmentSchema } from '@/schemas/assignment.schema';
import { TCreateAssignmentPayload } from '@/types';

type AssignmentContentProps = {
    lessonId: string;
    title: string;
    task: string;
    isCompleted: boolean;
};

const AssignmentContent = ({
    lessonId,
    title,
    task,
    isCompleted,
}: AssignmentContentProps) => {
    const [isSubmitted, setIsSubmitted] = useState(isCompleted);

    const [createAssignment] = useCreateAssignmentMutation();
    const { data: assignment, isLoading } =
        useGetAssignmentByLessonIdQuery(lessonId);

    useEffect(() => {
        if (assignment?.submissionText) {
            setIsSubmitted(true);
        }
    }, [assignment]);

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Submitting assignment...');
        try {
            const payload: TCreateAssignmentPayload = {
                lessonId: lessonId,
                submissionText: data.submissionText as string,
            };
            await createAssignment(payload).unwrap();
            toast.success('Assignment submitted successfully!', {
                id: toastId,
            });
            setIsSubmitted(true);
        } catch (error: any) {
            toast.error('Failed to submit assignment. Please try again.', {
                id: toastId,
            });
            console.error('Failed to submit assignment:', error);
        }
    };

    const defaultValues = {
        submissionText: assignment?.submissionText || '',
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-200 p-4">
                <div className="flex items-center gap-3">
                    <MdAssignment className="w-6 h-6 text-[#1b7ad2]" />
                    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                </div>
            </div>

            {isLoading ? (
                <Loader />
            ) : (
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

                    {isSubmitted && assignment ? (
                        <>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                    Your Submission:
                                </h4>
                                <p className="text-gray-800 whitespace-pre-wrap">
                                    {assignment.submissionText}
                                </p>
                            </div>
                            {assignment.feedback && (
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                        Feedback:
                                    </h4>
                                    <p className="text-gray-600">
                                        {assignment.feedback}
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        <LForm
                            onSubmit={handleSubmit}
                            defaultValues={defaultValues}
                            resolver={zodResolver(assignmentSchema)}
                        >
                            <LTextarea
                                name="submissionText"
                                label="Your Answer"
                                placeholder="Put your link and description here"
                            />
                            <div className="flex justify-end mt-4">
                                <Button
                                    type="submit"
                                    className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white px-6"
                                >
                                    Submit
                                </Button>
                            </div>
                        </LForm>
                    )}
                </div>
            )}
        </div>
    );
};

export default AssignmentContent;
