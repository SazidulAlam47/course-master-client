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
import { useDeleteInstructorMutation } from '@/redux/api/instructorApi';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { IInstructor } from '@/types';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type DeleteInstructorProps = {
    instructor: IInstructor;
};

const DeleteInstructor = ({ instructor }: DeleteInstructorProps) => {
    const [deleteInstructor] = useDeleteInstructorMutation();
    const [open, setOpen] = useState(false);

    const handleDelete = async (data: FieldValues) => {
        const toastId = toast.loading('Deleting instructor...');
        try {
            // if image is selected, then upload the image
            if (data?.file?.size) {
                data.avatar = await uploadImageToCloudinary(data.file);
            }
            await deleteInstructor(instructor._id).unwrap();
            toast.success('Instructor deleted successfully!', {
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
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Instructor</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete{' '}
                        <strong>{instructor.name}</strong>? <br /> This action
                        cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button
                        type="submit"
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

export default DeleteInstructor;
