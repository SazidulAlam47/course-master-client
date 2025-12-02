import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export type EnrolledCourseProps = {
    id: string;
    title: string;
    instructor: string;
    thumbnail: string;
    progress: number;
    batch: number;
};

const EnrolledCourseCard = ({ course }: { course: EnrolledCourseProps }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1b7ad2]/50 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                    <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                    />

                    <div className="absolute bottom-3 left-3">
                        <span className="bg-blue-400 text-black text-xs font-bold px-3 py-1 rounded">
                            Batch {course.batch}
                        </span>
                    </div>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-[#1b7ad2] mb-2 hover:text-[#1565b8] transition-colors">
                            {course.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {course.instructor}
                        </p>

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

export default EnrolledCourseCard;
