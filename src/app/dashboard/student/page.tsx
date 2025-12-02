import Container from '@/components/Container';
import authOptions from '@/nextAuth/authOptions';
import { getServerSession } from 'next-auth';
import EnrolledCourseCard from './components/EnrolledCourseCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock enrolled courses data - replace with actual API call
const enrolledCourses = [
    {
        id: '1',
        title: 'Complete Web Development Course With Programming Hero',
        instructor: 'ঝংকার মাহবুব',
        thumbnail:
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-education-youtube-thumbnail-design-template-81860c5e2c826288e86665f75958fc82_screen.jpg',
        progress: 40,
        batch: 10,
    },
];

const StudentDashboardPage = async () => {
    const session = await getServerSession(authOptions);
    const userName = session?.user?.name || 'Student';

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

                    {enrolledCourses.length ? (
                        <div className="space-y-4">
                            {enrolledCourses.map((course) => (
                                <EnrolledCourseCard
                                    key={course.id}
                                    course={course}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-sm">
                            <p className="text-gray-500 text-lg mb-4">
                                You haven&apos;t enrolled in any courses yet.
                            </p>
                            <Link href="/courses">
                                <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                                    Browse Courses
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default StudentDashboardPage;
