import Container from '@/components/Container';
import authOptions from '@/nextAuth/authOptions';
import { getServerSession } from 'next-auth';
import EnrolledCourseCard from './components/EnrolledCourseCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getMyEnrollments } from '@/services/actions/courseActions';
import EmptyPlaceholder from '@/components/shared/EmptyPlaceholder';
import { BookOpen } from 'lucide-react';

const StudentDashboardPage = async () => {
    const session = await getServerSession(authOptions);
    const userName = session?.user?.name || 'Student';

    const enrollments = await getMyEnrollments();

    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-10">
                <div className="mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Welcome Back{' '}
                        <span className="text-[#1b7ad2]">{userName}</span>,
                        Ready For Your Next Lesson?
                    </h1>
                </div>

                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        Enrolled Courses
                    </h2>

                    {enrollments.length ? (
                        <div className="space-y-4">
                            {enrollments.map((enrollment) => (
                                <EnrolledCourseCard
                                    key={enrollment._id}
                                    enrollment={enrollment}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                            <EmptyPlaceholder
                                Icon={BookOpen}
                                title="No Courses Enrolled"
                                description="You haven't enrolled in any courses yet."
                                className="min-h-0"
                            >
                                <div className="text-center mt-1">
                                    <Link href="/courses">
                                        <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                                            Browse Courses
                                        </Button>
                                    </Link>
                                </div>
                            </EmptyPlaceholder>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default StudentDashboardPage;
