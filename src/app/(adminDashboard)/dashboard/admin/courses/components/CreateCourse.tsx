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
import { useCreateCourseMutation } from '@/redux/api/courseApi';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { useGetAllInstructorsQuery } from '@/redux/api/instructorApi';
import LSelect from '@/components/form/LSelect';
import CreateInstructor from '../../instructors/components/CreateInstructor';
import CreateCategory from './CreateCategory';
import { courseDefaultValues } from '@/constants/course.constant';
import { courseSchema } from '@/schemas/course.schema';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import createOptions from '@/utils/createOptions';
import LTextarea from '@/components/form/LTextarea';

const CreateCourse = () => {
    const { data: instructors, isLoading: isInstructorsLoading } =
        useGetAllInstructorsQuery({});
    const { data: categories, isLoading: isCategoriesLoading } =
        useGetAllCategoriesQuery({});
    const [createCourse] = useCreateCourseMutation();
    const [open, setOpen] = useState(false);

    const instructorsOptions = createOptions(instructors || []);
    const categoriesOptions = createOptions(categories || []);

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Creating course...');
        try {
            if (data?.file?.size) {
                data.thumbnail = await uploadImageToCloudinary(data.file);
            } else {
                throw new Error(
                    'Please upload a thumbnail image for the course.'
                );
            }
            await createCourse(data).unwrap();
            toast.success('Course created successfully!', { id: toastId });
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
                <Button type="button">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Course
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Create Course</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={courseDefaultValues}
                    resolver={zodResolver(courseSchema)}
                >
                    <div className="space-y-4">
                        <LInput
                            name="title"
                            label="Title"
                            placeholder="Course title"
                        />
                        <LTextarea
                            name="description"
                            label="Description"
                            placeholder="Short course description"
                        />
                        <div className="flex gap-2">
                            <LSelect
                                name="instructorId"
                                label="Instructor"
                                placeholder="Select Instructor"
                                className="grow"
                                disabled={isInstructorsLoading}
                                options={instructorsOptions || []}
                            />
                            <CreateInstructor hideIcon className="mt-6" />
                        </div>

                        <LInput
                            name="price"
                            label="Price"
                            placeholder="Price of the course"
                        />
                        <div className="flex gap-2">
                            <LSelect
                                name="categoryId"
                                label="Category"
                                placeholder="Course category"
                                className="grow"
                                disabled={isCategoriesLoading}
                                options={categoriesOptions || []}
                            />

                            <CreateCategory className="mt-6" />
                        </div>
                        <LFileUpload label="Course Thumbnail" />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default CreateCourse;
