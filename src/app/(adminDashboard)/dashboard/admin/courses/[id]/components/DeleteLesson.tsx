/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useDeleteLessonMutation } from '@/redux/api/lessonApi';
import { ILesson } from '@/types';
import { useState } from 'react';
import { toast } from 'sonner';

type DeleteLessonProps = {
    lesson: ILesson;
};

const DeleteLesson = ({ lesson }: DeleteLessonProps) => {
    const [deleteLesson] = useDeleteLessonMutation();
    const [open, setOpen] = useState(false);

    const handleDelete = async () => {
        const toastId = toast.loading('Deleting lesson...');
        try {
            await deleteLesson(lesson._id).unwrap();
            toast.success('Lesson deleted successfully!', { id: toastId });
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
                <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Lesson</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete{' '}
                        <strong>{lesson.title}</strong>? <br /> This action
                        cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="button"
                        variant="destructive"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteLesson;
