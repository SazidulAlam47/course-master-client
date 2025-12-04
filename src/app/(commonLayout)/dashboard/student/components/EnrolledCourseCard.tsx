import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { IEnrollment } from '@/types';

export type EnrolledCourseProps = {
    enrollment: IEnrollment;
};

const EnrolledCourseCard = ({ enrollment }: EnrolledCourseProps) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1b7ad2]/50 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-72 h-48 md:h-auto shrink-0">
                    <Image
                        src={enrollment.courseId.thumbnail}
                        alt={enrollment.courseId.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-[#1b7ad2] mb-2 hover:text-[#1565b8] transition-colors">
                            {enrollment.courseId.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {enrollment.courseId.instructorId.name}
                        </p>

                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-gray-500">
                                    Progress
                                </span>
                                <span className="text-sm font-semibold text-[#1b7ad2]">
                                    {enrollment.progress}%
                                </span>
                            </div>
                            <Progress
                                value={enrollment.progress}
                                className="h-2.5 bg-gray-200 *:data-[slot=progress-indicator]:bg-[#1b7ad2]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Link href={`/courses/${enrollment.courseId._id}`}>
                            <Button
                                variant="outline"
                                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                            >
                                Course Outline
                            </Button>
                        </Link>
                        <Link
                            href={`/dashboard/student/learn/${enrollment.courseId._id}`}
                        >
                            <Button className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white">
                                {enrollment.progress > 0
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
