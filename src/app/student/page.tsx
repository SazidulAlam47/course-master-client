import Container from '@/components/Container';
import authOptions from '@/nextAuth/authOptions';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
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
        batch: 'Batch 10',
    },
];

const StudentDashboardPage = async () => {
    const session = await getServerSession(authOptions);
    const userName = session?.user?.name || 'Student';

    return (
        <div className="min-h-screen bg-gray-50">
            <Container className="py-10">
                {/* Welcome Section */}
                <div className="mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Welcome Back{' '}
                        <span className="text-[#1b7ad2]">{userName}</span>,
                        Ready For Your Next Lesson?
                    </h1>
                </div>

                {/* Enrolled Courses Section */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        My Enrolled Courses
                    </h2>

                    <div className="space-y-4">
                        {enrolledCourses.map((course) => (
                            <EnrolledCourseCard
                                key={course.id}
                                course={course}
                            />
                        ))}
                    </div>

                    {enrolledCourses.length === 0 && (
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

type EnrolledCourse = {
    id: string;
    title: string;
    instructor: string;
    thumbnail: string;
    progress: number;
    batch: string;
};

const EnrolledCourseCard = ({ course }: { course: EnrolledCourse }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1b7ad2]/50 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row">
                {/* Course Thumbnail */}
                <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                    <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                    />
                    {/* Batch Badge */}
                    <div className="absolute bottom-3 left-3">
                        <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded">
                            {course.batch}
                        </span>
                    </div>
                </div>

                {/* Course Info */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-[#1b7ad2] mb-2 hover:text-[#1565b8] transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {course.instructor}
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-500">
                                    Progress
                                </span>
                                <span className="text-sm font-semibold text-[#1b7ad2]">
                                    {course.progress}%
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-gradient-to-r from-[#1b7ad2] to-[#3b9aec] h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${course.progress}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <Link href={`/courses/${course.id}`}>
                            <Button
                                variant="outline"
                                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                            >
                                Course Outline
                            </Button>
                        </Link>
                        <Link href={`/courses/${course.id}/learn`}>
                            <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                                {course.progress > 0
                                    ? 'Continue Learning'
                                    : 'Start Course'}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboardPage;
