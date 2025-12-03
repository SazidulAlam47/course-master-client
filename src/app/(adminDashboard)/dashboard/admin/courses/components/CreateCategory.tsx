'use client';

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
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { useCreateCategoryMutation } from '@/redux/api/categoryApi';
import { categoryDefaultValues } from '@/constants/course.constant';
import { categorySchema } from '@/schemas/course.schema';

type CreateCategoryProps = {
    className?: string;
};

const CreateCategory = ({ className }: CreateCategoryProps) => {
    const [createCategory] = useCreateCategoryMutation();
    const [open, setOpen] = useState(false);

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Creating category...');
        try {
            await createCategory(data).unwrap();
            toast.success('Category created successfully!', { id: toastId });
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
                <Button className={className}>Add Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Create Category</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={categoryDefaultValues}
                    resolver={zodResolver(categorySchema)}
                >
                    <div>
                        <LInput
                            name="name"
                            label="Name"
                            placeholder="Category name"
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default CreateCategory;
