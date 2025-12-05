/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import LForm from '@/components/form/LForm';
import LTextarea from '@/components/form/LTextarea';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useUpdateAssignmentMutation } from '@/redux/api/assignmentApi';
import { IAssignment } from '@/types';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type GiveUpdateFeedbackProps = {
    assignment: IAssignment;
};

const GiveUpdateFeedback = ({ assignment }: GiveUpdateFeedbackProps) => {
    const [updateAssignment] = useUpdateAssignmentMutation();
    const [open, setOpen] = useState(false);

    const isUpdate = !!assignment.feedback;

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading(
            `${isUpdate ? 'Updating' : 'Submitting'} feedback...`
        );
        try {
            await updateAssignment({
                id: assignment._id,
                data: { feedback: data.feedback },
            }).unwrap();
            toast.success(
                `Feedback ${isUpdate ? 'updated' : 'submitted'} successfully!`,
                { id: toastId }
            );
            setOpen(false);
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm">
                    {isUpdate ? 'Update' : 'Give'} Feedback
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>
                        {isUpdate ? 'Update' : 'Give'} Feedback
                    </DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={{
                        feedback: assignment.feedback || '',
                    }}
                >
                    <div>
                        <LTextarea
                            name="feedback"
                            label="Feedback"
                            placeholder="Enter your feedback for this assignment"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">
                            {isUpdate ? 'Update' : 'Submit'}
                        </Button>
                    </DialogFooter>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default GiveUpdateFeedback;
