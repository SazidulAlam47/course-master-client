import { LessonTypes } from '@/constants/course.constant';
import z from 'zod';

export const instructorSchema = z.object({
    name: z.string().min(1, 'Please enter Instructor name'),
    title: z.string().min(1, 'Please enter Instructor title'),
    bio: z.string().min(1, 'Please enter Instructor bio'),
    file: z.any().optional(),
});

export const courseSchema = z.object({
    title: z.string().min(1, 'Please enter course title'),
    description: z.string().min(1, 'Please enter course description'),
    instructorId: z.string().min(1, 'Please select an instructor'),
    price: z
        .string()
        .min(1, 'Please enter course price')
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), {
            message: 'Price must be a number',
        })
        .refine((val) => val >= 0, {
            message: 'Price must be a non-negative number',
        }),
    categoryId: z.string().min(1, 'Please select a category'),
    file: z.any(),
});

export const categorySchema = z.object({
    name: z.string().min(1, 'Please enter category name'),
});

export const createLessonSchema = z.object({
    title: z.string().min(1, 'Please enter lesson title'),
    type: z.enum(LessonTypes, {
        message: 'Please select a lesson type',
    }),
    duration: z.string().min(1, 'Please enter duration'),
    videoId: z.string().optional(),
    assignmentTask: z.string().optional(),
});

export const updateLessonSchema = z.object({
    title: z.string().min(1, 'Please enter lesson title'),
    duration: z.string().min(1, 'Please enter duration'),
    videoId: z.string().optional(),
    assignmentTask: z.string().optional(),
});
