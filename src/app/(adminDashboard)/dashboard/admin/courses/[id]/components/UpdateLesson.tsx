'use client';

import LInput from '@/components/form/LInput';
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
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useUpdateLessonMutation } from '@/redux/api/lessonApi';
import { ILesson, IQuizQuestion } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import LForm from '@/components/form/LForm';
import { updateLessonSchema } from '@/schemas/course.schema';

type UpdateLessonProps = {
    lesson: ILesson;
};

const UpdateLesson = ({ lesson }: UpdateLessonProps) => {
    const [updateLesson] = useUpdateLessonMutation();
    const [open, setOpen] = useState(false);
    const [quizQuestions, setQuizQuestions] = useState<IQuizQuestion[]>(
        lesson.quizQuestions || []
    );

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Updating lesson...');
        try {
            const lessonData = {
                ...data,
                quizQuestions:
                    lesson.type === 'quiz' ? quizQuestions : undefined,
            };
            await updateLesson({ id: lesson._id, data: lessonData }).unwrap();
            toast.success('Lesson updated successfully!', { id: toastId });
            setOpen(false);
        } catch (error: unknown) {
            const err = error as { message?: string; data?: string };
            toast.error(err.message || err.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    const updateQuizQuestion = (
        index: number,
        field: keyof IQuizQuestion,
        value: string | number | string[]
    ) => {
        const updated = [...quizQuestions];
        updated[index] = { ...updated[index], [field]: value };
        setQuizQuestions(updated);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Update Lesson</DialogTitle>
                </DialogHeader>
                <LForm
                    onSubmit={handleSubmit}
                    defaultValues={{
                        title: lesson.title,
                        duration: lesson.duration,
                        videoId: lesson.videoId || '',
                        assignmentTask: lesson.assignmentTask || '',
                    }}
                    resolver={zodResolver(updateLessonSchema)}
                >
                    <div className="space-y-4">
                        <LInput
                            name="title"
                            label="Title"
                            placeholder="Lesson title"
                        />
                        <div className="text-sm text-gray-600">
                            <strong>Type:</strong> {lesson.type} (cannot be
                            changed)
                        </div>
                        <LInput
                            name="duration"
                            label="Duration"
                            placeholder="e.g., 10 min"
                        />
                        {lesson.type === 'video' && (
                            <LInput
                                name="videoId"
                                label="Video ID"
                                placeholder="YouTube video ID"
                            />
                        )}
                        {lesson.type === 'assignment' && (
                            <LTextarea
                                name="assignmentTask"
                                label="Assignment Task"
                                placeholder="Describe the assignment"
                            />
                        )}
                        {lesson.type === 'quiz' && (
                            <div className="space-y-4">
                                <h3 className="text-sm font-medium">
                                    Quiz Questions
                                </h3>
                                {quizQuestions.map((q, idx) => (
                                    <div
                                        key={idx}
                                        className="border p-4 rounded space-y-2"
                                    >
                                        <div className="space-y-1">
                                            <label className="block text-sm font-medium text-gray-800">
                                                {`Question ${idx + 1}`}
                                            </label>
                                            <Input
                                                placeholder="Enter question"
                                                value={q.question}
                                                onChange={(e) =>
                                                    updateQuizQuestion(
                                                        idx,
                                                        'question',
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        {q.options.map((opt, optIdx) => (
                                            <div
                                                key={optIdx}
                                                className="space-y-1"
                                            >
                                                <label className="block text-sm font-medium text-gray-800">
                                                    {`Option ${String.fromCharCode(
                                                        65 + optIdx
                                                    )}`}
                                                </label>
                                                <Input
                                                    placeholder={`Option ${String.fromCharCode(
                                                        65 + optIdx
                                                    )}`}
                                                    value={opt}
                                                    onChange={(e) => {
                                                        const newOpts = [
                                                            ...q.options,
                                                        ];
                                                        newOpts[optIdx] =
                                                            e.target.value;
                                                        updateQuizQuestion(
                                                            idx,
                                                            'options',
                                                            newOpts
                                                        );
                                                    }}
                                                />
                                            </div>
                                        ))}
                                        <div className="space-y-1">
                                            <label className="block text-sm font-medium text-gray-800">
                                                Correct Answer
                                            </label>
                                            <Select
                                                value={q.correctAnswer.toString()}
                                                onValueChange={(value) =>
                                                    updateQuizQuestion(
                                                        idx,
                                                        'correctAnswer',
                                                        parseInt(value)
                                                    )
                                                }
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="0">
                                                        A
                                                    </SelectItem>
                                                    <SelectItem value="1">
                                                        B
                                                    </SelectItem>
                                                    <SelectItem value="2">
                                                        C
                                                    </SelectItem>
                                                    <SelectItem value="3">
                                                        D
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <DialogFooter>
                            <Button type="submit">Update</Button>
                        </DialogFooter>
                    </div>
                </LForm>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateLesson;
