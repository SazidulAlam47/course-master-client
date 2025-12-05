import { Users, BookOpen, FileCheck, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { IMeta } from '@/types';

type StatsCardsProps = {
    meta: IMeta | undefined;
};

const StatsCards = ({ meta }: StatsCardsProps) => {
    const stats = [
        {
            title: 'Total Enrollments',
            value: meta?.totalEnrollments,
            icon: Users,
            color: 'bg-blue-100 text-blue-600',
        },
        {
            title: 'Active Courses',
            value: meta?.totalPublishedCourses,
            icon: BookOpen,
            color: 'bg-green-100 text-green-600',
        },
        {
            title: 'Pending Reviews',
            value: meta?.totalPendingReviews,
            icon: FileCheck,
            color: 'bg-yellow-100 text-yellow-600',
        },
        {
            title: 'Assignments Submitted',
            value: meta?.totalAssignmentsSubmitted,
            icon: FileText,
            color: 'bg-purple-100 text-purple-600',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <Card
                    key={stat.title}
                    className="bg-white border border-gray-200"
                >
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 mb-1">
                                    {stat.title}
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {stat.value}
                                </p>
                            </div>
                            <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}
                            >
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default StatsCards;
