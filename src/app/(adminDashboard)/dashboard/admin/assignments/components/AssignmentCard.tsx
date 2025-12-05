import { FileCheck } from 'lucide-react';
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
import { IAssignment } from '@/types';
import GiveUpdateFeedback from './GiveUpdateFeedback';

type AssignmentCardProps = {
    assignment: IAssignment;
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'pending':
            return 'bg-yellow-100 text-yellow-700';
        case 'reviewed':
            return 'bg-blue-100 text-blue-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const AssignmentCard = ({ assignment }: AssignmentCardProps) => {
    const assignmentStatus = assignment?.feedback ? 'reviewed' : 'pending';
    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-white shadow-sm">
                            <AvatarImage
                                src={assignment.studentId.image}
                                alt={assignment.studentId.name}
                            />
                            <AvatarFallback className="bg-[#1b7ad2] text-white font-medium text-sm">
                                {getInitials(assignment.studentId.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-base">
                                {assignment.studentId.name}
                            </CardTitle>
                            <CardDescription>
                                {assignment.studentId.email}
                            </CardDescription>
                        </div>
                    </div>
                    <Badge
                        className={`${getStatusColor(
                            assignmentStatus
                        )} hover:${getStatusColor(assignmentStatus)}`}
                    >
                        {assignmentStatus}
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
                            {assignment.lessonId.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {assignment.courseId.title} &#x2022; Submitted{' '}
                            {new Date(assignment.createdAt).toLocaleString(
                                'en-GB',
                                {
                                    hour12: true,
                                }
                            )}
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 font-medium mb-2">
                        Submission:
                    </p>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">
                        {assignment.submissionText}
                    </p>
                </div>

                {assignment.feedback && (
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <p className="text-sm text-blue-700 font-medium mb-1">
                            Feedback:
                        </p>
                        <p className="text-sm text-blue-600">
                            {assignment.feedback}
                        </p>
                    </div>
                )}

                <div>
                    <Button size="sm">
                        {assignmentStatus === 'pending' ? 'Give' : 'Update'}{' '}
                        Feedback
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default AssignmentCard;
