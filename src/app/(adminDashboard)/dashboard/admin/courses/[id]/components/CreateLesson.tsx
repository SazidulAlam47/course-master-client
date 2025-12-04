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
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useCreateLessonMutation } from '@/redux/api/lessonApi';
import { LessonTypes } from '@/constants/course.constant';
import { IQuizQuestion } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { FieldValues, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import LForm from '@/components/form/LForm';
import capitalize from '@/utils/capitalize';
import { createLessonSchema } from '@/schemas/course.schema';
import { createLessonDefaultValues } from '@/constants/course.constant';

type CreateLessonProps = {
    courseId: string;
};

const FormContent = ({
    courseId,
    onSuccess,
}: {
    courseId: string;
    onSuccess: () => void;
}) => {
    const [createLesson] = useCreateLessonMutation();
    const [quizQuestions, setQuizQuestions] = useState<IQuizQuestion[]>([]);

    const handleSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Creating lesson...');
        try {
            if (data.type === 'quiz' && quizQuestions.length === 0) {
                toast.error('Please add at least one quiz question', {
                    id: toastId,
                });
                return;
            }

            // Validate quiz questions and options
            if (data.type === 'quiz') {
                for (let i = 0; i < quizQuestions.length; i++) {
                    const question = quizQuestions[i];
                    if (!question.question.trim()) {
                        toast.error(`Question ${i + 1} cannot be empty`, {
                            id: toastId,
                        });
                        return;
                    }
                    for (let j = 0; j < question.options.length; j++) {
                        if (!question.options[j].trim()) {
                            toast.error(
                                `Question ${
                                    i + 1
                                }, Option ${String.fromCharCode(
                                    65 + j
                                )} cannot be empty`,
                                { id: toastId }
                            );
                            return;
                        }
                    }
                }
            }

            if (data.type === 'video' && !data.videoId) {
                toast.error('Please enter Video ID for video lessons', {
                    id: toastId,
                });
                return;
            }
            if (data.type === 'assignment' && !data.assignmentTask) {
                toast.error(
                    'Please enter Assignment Task for assignment lessons',
                    { id: toastId }
                );
                return;
            }

            const lessonData = {
                ...data,
                courseId,
                quizQuestions: data.type === 'quiz' ? quizQuestions : undefined,
            };
            await createLesson(lessonData).unwrap();
            toast.success('Lesson created successfully!', { id: toastId });
            onSuccess();
            setQuizQuestions([]);
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    const addQuizQuestion = () => {
        if (quizQuestions.length < 10) {
            setQuizQuestions([
                ...quizQuestions,
                { question: '', options: ['', '', '', ''], correctAnswer: 0 },
            ]);
        }
    };

    const updateQuizQuestion = (
        index: number,
        field: keyof IQuizQuestion,
        value: any
    ) => {
        const updated = [...quizQuestions];
        updated[index] = { ...updated[index], [field]: value };
        setQuizQuestions(updated);
    };

    const typeOptions = LessonTypes.map((type) => ({
        value: type,
        label: capitalize(type),
    }));

    return (
        <LForm
            onSubmit={handleSubmit}
            defaultValues={createLessonDefaultValues}
            resolver={zodResolver(createLessonSchema)}
        >
            <FormFields
                typeOptions={typeOptions}
                quizQuestions={quizQuestions}
                addQuizQuestion={addQuizQuestion}
                updateQuizQuestion={updateQuizQuestion}
            />
        </LForm>
    );
};

const FormFields = ({
    typeOptions,
    quizQuestions,
    addQuizQuestion,
    updateQuizQuestion,
}: {
    typeOptions: { value: string; label: string }[];
    quizQuestions: IQuizQuestion[];
    addQuizQuestion: () => void;
    updateQuizQuestion: (
        index: number,
        field: keyof IQuizQuestion,
        value: any
    ) => void;
}) => {
    const selectedType = useWatch({ name: 'type' });

    return (
        <div className="space-y-4">
            <LInput name="title" label="Title" placeholder="Lesson title" />
            <LSelect
                name="type"
                label="Type"
                placeholder="Select lesson type"
                options={typeOptions}
            />
            <LInput
                name="duration"
                label="Duration"
                placeholder="e.g., 10 min"
            />
            {selectedType === 'video' && (
                <LInput
                    name="videoId"
                    label="Video ID"
                    placeholder="YouTube video ID"
                />
            )}
            {selectedType === 'assignment' && (
                <LTextarea
                    name="assignmentTask"
                    label="Assignment Task"
                    placeholder="Describe the assignment"
                />
            )}
            {selectedType === 'quiz' && (
                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Quiz Questions</h3>
                    {quizQuestions.map((q, idx) => (
                        <div key={idx} className="border p-4 rounded space-y-2">
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
                                <div key={optIdx} className="space-y-1">
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
                                            const newOpts = [...q.options];
                                            newOpts[optIdx] = e.target.value;
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
                                        <SelectItem value="0">A</SelectItem>
                                        <SelectItem value="1">B</SelectItem>
                                        <SelectItem value="2">C</SelectItem>
                                        <SelectItem value="3">D</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    ))}
                    {quizQuestions.length < 10 && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={addQuizQuestion}
                        >
                            Add Question
                        </Button>
                    )}
                </div>
            )}
            <DialogFooter>
                <Button type="submit">Create</Button>
            </DialogFooter>
        </div>
    );
};

const CreateLesson = ({ courseId }: CreateLessonProps) => {
    const [open, setOpen] = useState(false);

    const handleSuccess = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Lesson
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create Lesson</DialogTitle>
                </DialogHeader>
                <FormContent courseId={courseId} onSuccess={handleSuccess} />
            </DialogContent>
        </Dialog>
    );
};

export default CreateLesson;
