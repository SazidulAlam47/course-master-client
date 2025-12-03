import { FileCheck, ExternalLink } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import getInitials from '@/utils/getInitials';

type AssignmentCardProps = {
    submission: {
        id: string;
        studentName: string;
        studentEmail: string;
        studentImage: string;
        courseName: string;
        lessonTitle: string;
        submissionText: string;
        submittedAt: string;
        status: 'pending' | 'reviewed' | 'approved' | 'rejected';
        feedback?: string;
    };
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-700';
        case 'reviewed':
            return 'bg-blue-100 text-blue-700';
        case 'approved':
            return 'bg-green-100 text-green-700';
        case 'rejected':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const AssignmentCard = ({ submission }: AssignmentCardProps) => {
    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
                            <AvatarImage
                                src={submission.studentImage}
                                alt={submission.studentName}
                            />
                            <AvatarFallback className="bg-[#1b7ad2] text-white font-medium text-sm">
                                {getInitials(submission.studentName)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-base">
                                {submission.studentName}
                            </CardTitle>
                            <CardDescription>
                                {submission.studentEmail}
                            </CardDescription>
                        </div>
                    </div>
                    <Badge
                        className={`${getStatusColor(
                            submission.status
                        )} hover:${getStatusColor(submission.status)}`}
                    >
                        {submission.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#1b7ad2]/10 rounded-lg flex items-center justify-center">
                        <FileCheck className="w-4 h-4 text-[#1b7ad2]" />
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">
                            {submission.lessonTitle}
                        </p>
                        <p className="text-sm text-gray-500">
                            {submission.courseName} • Submitted{' '}
                            {new Date(submission.submittedAt).toLocaleString()}
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-medium mb-2">
                        Submission:
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                        {submission.submissionText}
                    </p>
                </div>

                {submission.feedback && (
                    <>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                            <p className="text-sm text-blue-700 font-medium mb-1">
                                Feedback:
                            </p>
                            <p className="text-sm text-blue-600">
                                {submission.feedback}
                            </p>
                        </div>
                        <div>
                            <Button size="sm">Update Feedback</Button>
                        </div>
                    </>
                )}

                {submission.status === 'pending' && (
                    <div>
                        <Button size="sm">Give Feedback</Button>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AssignmentCard;
