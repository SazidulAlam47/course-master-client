import z from 'zod';

export const assignmentSchema = z.object({
    submissionText: z.string().min(1, 'Please enter submission text'),
});
