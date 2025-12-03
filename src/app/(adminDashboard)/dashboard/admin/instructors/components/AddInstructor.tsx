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
import { instructorSchema } from '@/schemas/course.schema';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const AddInstructor = () => {
    const handleSubmit = async (data: FieldValues) => {
        console.log(data);
        // const toastId = toast.loading('Creating instructor...');
        // try {
        //     // if image is selected, then upload the image
        //     if (data?.file?.size) {
        //         data.avatar = await uploadImageToCloudinary(data.file);
        //     }
        //     const res = await registerUser(data);
        //     console.log(res);
        //     if (res.success) {
        //         toast.success('Account created successfully!', {
        //             id: toastId,
        //         });
        //     } else {
        //         toast.error(res.message || 'Something went wrong', {
        //             id: toastId,
        //         });
        //     }
        // } catch (error: any) {
        //     toast.error(error.message || error.data || 'Something went wrong', {
        //         id: toastId,
        //     });
        // }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Instructor
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Instructor</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
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

export default AddInstructor;
