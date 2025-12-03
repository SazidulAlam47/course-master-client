'use client';

import LFileUpload from '@/components/form/LFileUpload';
import LForm from '@/components/form/LForm';
import LInput from '@/components/form/LInput';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useUpdateInstructorMutation } from '@/redux/api/instructorApi';
import { instructorSchema } from '@/schemas/course.schema';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { IInstructor } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type UpdateInstructorProps = {
    instructor: IInstructor;
};

const UpdateInstructor = ({ instructor }: UpdateInstructorProps) => {
    const [updateInstructor] = useUpdateInstructorMutation();
    const [open, setOpen] = useState(false);

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Updating instructor...');
        try {
            // if image is selected, then upload the image
            if (data?.file?.size) {
                data.avatar = await uploadImageToCloudinary(data.file);
            }
            await updateInstructor({ id: instructor._id, data }).unwrap();
            toast.success('Instructor updated successfully!', {
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
                <Button variant="outline" size="sm">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Instructor</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={
                        instructor as unknown as Record<string, unknown>
                    }
                    resolver={zodResolver(instructorSchema)}
                >
                    <div className="space-y-4">
                        <LInput
                            name="name"
                            label="Name"
                            placeholder="Enter instructor name"
                        />
                        <LInput
                            name="title"
                            label="Title"
                            placeholder="Enter instructor title"
                        />
                        <LInput
                            name="bio"
                            label="Bio"
                            placeholder="Enter instructor bio"
                        />
                        <LFileUpload label="Instructor Avatar" />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Update</Button>
                    </DialogFooter>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateInstructor;
