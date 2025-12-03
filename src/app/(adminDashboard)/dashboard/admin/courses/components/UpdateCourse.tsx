'use client';

import LFileUpload from '@/components/form/LFileUpload';
import LForm from '@/components/form/LForm';
import LInput from '@/components/form/LInput';
import LSelect from '@/components/form/LSelect';
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
import { courseSchema } from '@/schemas/course.schema';
import { useUpdateCourseMutation } from '@/redux/api/courseApi';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import { useGetAllInstructorsQuery } from '@/redux/api/instructorApi';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { ICourse } from '@/types';
import createOptions from '@/utils/createOptions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import CreateCategory from './CreateCategory';
import CreateInstructor from '../../instructors/components/CreateInstructor';

type UpdateCourseProps = {
    course: ICourse;
};

const UpdateCourse = ({ course }: UpdateCourseProps) => {
    const { data: instructors, isLoading: isInstructorsLoading } =
        useGetAllInstructorsQuery({});
    const { data: categories, isLoading: isCategoriesLoading } =
        useGetAllCategoriesQuery({});
    const [updateCourse] = useUpdateCourseMutation();
    const [open, setOpen] = useState(false);

    const instructorsOptions = createOptions(instructors || []);
    const categoriesOptions = createOptions(categories || []);

    const defaultValues = {
        ...course,
        price: course.price.toString(),
        instructorId: course.instructorId._id,
        categoryId: course.categoryId._id,
    };

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Updating course...');
        try {
            if (data?.file?.size) {
                data.thumbnail = await uploadImageToCloudinary(data.file);
            }
            await updateCourse({ id: course._id, data }).unwrap();
            toast.success('Course updated successfully!', { id: toastId });
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
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Update Course</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={defaultValues}
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
                        <Button type="submit">Update</Button>
                    </DialogFooter>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateCourse;
