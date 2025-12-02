import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import AssignmentCard from './components/AssignmentCard';

// Mock data - replace with actual API call
const mockSubmissions = [
    {
        id: '1',
        studentName: 'Ahmed Rahman',
        studentEmail: 'ahmed@example.com',
        studentImage: '',
        courseName: 'Complete Web Development Bootcamp',
        lessonTitle: 'Assignment 1: HTML Portfolio',
        submissionText:
            'https://github.com/ahmed/portfolio-project\n\nI have completed the portfolio assignment with all required sections.',
        submittedAt: '2025-01-20T14:30:00',
        status: 'pending' as const,
    },
    {
        id: '2',
        studentName: 'Fatima Khan',
        studentEmail: 'fatima@example.com',
        studentImage: '',
        courseName: 'Complete Web Development Bootcamp',
        lessonTitle: 'Assignment 1: HTML Portfolio',
        submissionText:
            'https://github.com/fatima/my-portfolio\n\nHere is my portfolio website. Please review!',
        submittedAt: '2025-01-19T10:15:00',
        status: 'approved' as const,
        feedback: 'Great work! Clean code and nice design.',
    },
    {
        id: '4',
        studentName: 'Sara Begum',
        studentEmail: 'sara@example.com',
        studentImage: '',
        courseName: 'Complete Web Development Bootcamp',
        lessonTitle: 'Assignment 2: CSS Landing Page',
        submissionText: 'Incomplete submission - will update soon.',
        submittedAt: '2025-01-22T16:45:00',
        status: 'rejected' as const,
        feedback:
            'Submission is incomplete. Please resubmit with all requirements.',
    },
];

const AssignmentReviewPage = () => {
    const pendingCount = mockSubmissions.filter(
        (s) => s.status === 'pending'
    ).length;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Assignment Review
                </h1>
                <p className="text-gray-500 mt-1">
                    Review and provide feedback on student submissions
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="Search by student name or assignment..."
                        className="pl-10 bg-white"
                    />
                </div>
                {pendingCount > 0 && (
                    <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
                        {pendingCount} pending review
                    </Badge>
                )}
            </div>

            <div className="grid gap-4">
                {mockSubmissions.map((submission) => (
                    <AssignmentCard
                        key={submission.id}
                        submission={submission}
                    />
                ))}
            </div>
        </div>
    );
};

export default AssignmentReviewPage;
