import { Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import EnrollmentCard from './components/EnrollmentCard';

// Mock data - replace with actual API call
const mockEnrollments = [
    {
        id: '1',
        studentName: 'Ahmed Rahman',
        studentEmail: 'ahmed@example.com',
        studentImage: '',
        courseName: 'Complete Web Development Bootcamp',
        batchName: 'Batch 1',
        enrolledAt: '2025-01-05',
        progress: 45,
        status: 'active' as const,
    },
    {
        id: '2',
        studentName: 'Fatima Khan',
        studentEmail: 'fatima@example.com',
        studentImage: '',
        courseName: 'Complete Web Development Bootcamp',
        batchName: 'Batch 1',
        enrolledAt: '2025-01-03',
        progress: 78,
        status: 'active' as const,
    },
    {
        id: '3',
        studentName: 'Mohammad Ali',
        studentEmail: 'ali@example.com',
        studentImage: '',
        courseName: 'Advanced React Masterclass',
        batchName: 'Batch 1',
        enrolledAt: '2025-01-15',
        progress: 100,
        status: 'completed' as const,
    },
    {
        id: '4',
        studentName: 'Sara Begum',
        studentEmail: 'sara@example.com',
        studentImage: '',
        courseName: 'Complete Web Development Bootcamp',
        batchName: 'Batch 2',
        enrolledAt: '2025-02-16',
        progress: 12,
        status: 'active' as const,
    },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'active':
            return 'bg-blue-100 text-blue-700';
        case 'completed':
            return 'bg-green-100 text-green-700';
        case 'dropped':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const EnrollmentManagementPage = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Enrollment Management
                </h1>
                <p className="text-gray-500 mt-1">
                    View and manage student enrollments across courses and
                    batches
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                        placeholder="Search by student name, course, or batch..."
                        className="pl-10 bg-white"
                    />
                </div>
            </div>

            <Card className="bg-white border border-gray-200">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1b7ad2]/10 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-[#1b7ad2]" />
                        </div>
                        <div>
                            <CardTitle>All Enrollments</CardTitle>
                            <CardDescription>
                                {mockEnrollments.length} total enrollments
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockEnrollments.map((enrollment) => (
                            <EnrollmentCard
                                key={enrollment.id}
                                enrollment={enrollment}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default EnrollmentManagementPage;
