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
import { useUpdateCourseMutation } from '@/redux/api/courseApi';
import { ICourse } from '@/types';
import { useState } from 'react';
import { toast } from 'sonner';

type PublishUnpublishCourseProps = {
    course: ICourse;
    buttonSize?: 'sm' | 'lg' | 'default';
};

const PublishUnpublishCourse = ({
    course,
    buttonSize = 'default',
}: PublishUnpublishCourseProps) => {
    const [updateCourse] = useUpdateCourseMutation();
    const [open, setOpen] = useState(false);

    const isPublished = course.isPublished;
    const action = isPublished ? 'Unpublish' : 'Publish';
    const newStatus = !isPublished;

    const handleAction = async () => {
        const toastId = toast.loading(`${action}ing course...`);
        try {
            const data = { isPublished: newStatus };
            await updateCourse({ id: course._id, data }).unwrap();
            toast.success(`Course ${action.toLowerCase()}ed successfully!`, {
                id: toastId,
            });
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
                    size={buttonSize}
                    className={
                        isPublished
                            ? 'text-orange-600 hover:text-orange-700 hover:bg-orange-50'
                            : 'text-green-600 hover:text-green-700 hover:bg-green-50'
                    }
                >
                    {action} Course
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{action} Course</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to {action.toLowerCase()}{' '}
                        <strong>{course.title}</strong>?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="button"
                        variant={isPublished ? 'destructive' : 'default'}
                        onClick={handleAction}
                    >
                        {action}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default PublishUnpublishCourse;
