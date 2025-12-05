'use client';

import { Badge } from '@/components/ui/badge';
import AssignmentCard from './components/AssignmentCard';
import { useGetAllAssignmentsQuery } from '@/redux/api/assignmentApi';
import Loader from '@/components/shared/Loader';
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder';
import { FileText } from 'lucide-react';

const AssignmentReviewPage = () => {
    const { data: assignments, isLoading } = useGetAllAssignmentsQuery({});

    const pendingCount =
        assignments?.reduce((acc, assignment) => {
            return assignment.feedback ? acc : acc + 1;
        }, 0) || 0;

    return (
        <div className="space-y-6">
            <div className="flex gap-3 items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Assignment Review
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Review and provide feedback on student submissions
                    </p>
                </div>
                {pendingCount ? (
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                        {pendingCount} pending review
                    </Badge>
                ) : null}
            </div>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid gap-4">
                    {assignments?.length ? (
                        assignments?.map((assignment) => (
                            <AssignmentCard
                                key={assignment._id}
                                assignment={assignment}
                            />
                        ))
                    ) : (
                        <EmptyPlaceholder
                            Icon={FileText}
                            title="No assignments to review"
                            description="There are no student assignments waiting for review at the moment."
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default AssignmentReviewPage;
