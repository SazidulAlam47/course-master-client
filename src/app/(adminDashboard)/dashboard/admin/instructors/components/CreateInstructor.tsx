/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { instructorDefaultValues } from '@/constants/instructor.constant';
import { useCreateInstructorMutation } from '@/redux/api/instructorApi';
import { instructorSchema } from '@/schemas/course.schema';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type CreateInstructorProps = {
    hideIcon?: boolean;
    className?: string;
};

const CreateInstructor = ({ hideIcon, className }: CreateInstructorProps) => {
    const [createInstructor] = useCreateInstructorMutation();
    const [open, setOpen] = useState(false);

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Creating instructor...');
        try {
            // if image is selected, then upload the image
            if (data?.file?.size) {
                data.avatar = await uploadImageToCloudinary(data.file);
            }
            await createInstructor(data).unwrap();
            toast.success('Instructor created successfully!', {
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
                <Button type="button" className={className}>
                    {!hideIcon && <Plus className="w-4 h-4 mr-2" />}
                    Add Instructor
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Instructor</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={instructorDefaultValues}
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
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default CreateInstructor;
