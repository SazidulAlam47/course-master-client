import z from 'zod';

export const instructorSchema = z.object({
    name: z.string().min(1, 'Please enter Instructor name'),
    title: z.string().min(1, 'Please enter Instructor title'),
    bio: z.string().min(1, 'Please enter Instructor bio'),
    file: z.any().optional(),
});
