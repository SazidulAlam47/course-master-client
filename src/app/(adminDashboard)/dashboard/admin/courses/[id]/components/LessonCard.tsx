import { BookOpen, Play, FileText, HelpCircle } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ILesson } from '@/types';
import UpdateLesson from './UpdateLesson';
import DeleteLesson from './DeleteLesson';

type LessonCardProps = {
    lesson: ILesson;
};

const LessonCard = ({ lesson }: LessonCardProps) => {
    const getIcon = () => {
        switch (lesson.type) {
            case 'video':
                return <Play className="w-5 h-5 text-blue-500" />;
            case 'assignment':
                return <FileText className="w-5 h-5 text-green-500" />;
            case 'quiz':
                return <HelpCircle className="w-5 h-5 text-purple-500" />;
            default:
                return <BookOpen className="w-5 h-5 text-gray-500" />;
        }
    };

    const getBadgeColor = () => {
        switch (lesson.type) {
            case 'video':
                return 'bg-blue-100 text-blue-800';
            case 'assignment':
                return 'bg-green-100 text-green-800';
            case 'quiz':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
                <div className="flex gap-2.5 justify-between items-center">
                    <div className="flex items-center gap-3">
                        {getIcon()}
                        <div>
                            <CardTitle className="text-lg">
                                {lesson.title}
                            </CardTitle>
                            <CardDescription>
                                Order: {lesson.order} | Duration:{' '}
                                {lesson.duration}
                            </CardDescription>
                        </div>
                    </div>
                    <Badge className={getBadgeColor()}>{lesson.type}</Badge>
                </div>
            </CardHeader>
            <CardContent>
                {lesson.type === 'video' && lesson.videoId && (
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Video ID:</strong> {lesson.videoId}
                    </p>
                )}
                {lesson.type === 'assignment' && lesson.assignmentTask && (
                    <p className="text-sm text-gray-600 mb-2">
                        <strong>Task:</strong> {lesson.assignmentTask}
                    </p>
                )}
                {lesson.type === 'quiz' && lesson.quizQuestions && (
                    <div className="text-sm text-gray-600 mb-2">
                        <strong>Quiz Questions:</strong>{' '}
                        {lesson.quizQuestions.length} questions
                        {lesson.quizQuestions.slice(0, 2).map((q, idx) => (
                            <div key={idx} className="mt-1">
                                Q{idx + 1}: {q.question}
                            </div>
                        ))}
                        {lesson.quizQuestions.length > 2 && (
                            <div className="text-xs text-gray-500">
                                ...and {lesson.quizQuestions.length - 2} more
                            </div>
                        )}
                    </div>
                )}
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <UpdateLesson lesson={lesson} />
                        <DeleteLesson lesson={lesson} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default LessonCard;
