'use client';

import { Users } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import EnrollmentCard from './components/EnrollmentCard';
import { useGetAllEnrollmentsQuery } from '@/redux/api/enrollmentApi';
import Loader from '@/components/shared/Loader';

const EnrollmentManagementPage = () => {
    const { data: enrollments, isLoading } = useGetAllEnrollmentsQuery({});

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

            {isLoading ? (
                <Loader />
            ) : (
                <Card className="bg-white border border-gray-200">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#1b7ad2]/10 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-[#1b7ad2]" />
                            </div>
                            <div>
                                <CardTitle>All Enrollments</CardTitle>
                                <CardDescription>
                                    {enrollments?.length} total enrollments
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {enrollments?.map((enrollment) => (
                                <EnrollmentCard
                                    key={enrollment._id}
                                    enrollment={enrollment}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default EnrollmentManagementPage;
