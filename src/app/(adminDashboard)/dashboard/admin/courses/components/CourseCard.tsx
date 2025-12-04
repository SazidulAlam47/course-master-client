import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ICourse } from '@/types';
import UpdateCourse from './UpdateCourse';
import DeleteCourse from './DeleteCourse';
import PublishUnpublishCourse from './PublishUnpublishCourse';
import Image from 'next/image';

type CourseCardProps = {
    course: ICourse;
};

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
                <div className="flex gap-2.5 justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Image
                            src={course.thumbnail!}
                            alt={course.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                            <CardTitle className="text-lg">
                                {course.title}
                            </CardTitle>
                            <CardDescription className="max-w-4xl">
                                {course.description}
                            </CardDescription>
                        </div>
                    </div>
                    <div>
                        {course.isPublished ? (
                            <Badge className="bg-green-200 text-black">
                                Published
                            </Badge>
                        ) : (
                            <Badge className="bg-amber-200 text-black">
                                Draft
                            </Badge>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>
                        <strong>Instructor:</strong> {course.instructorId.name}
                    </span>
                    <span>
                        <strong>Category:</strong> {course.categoryId.name}
                    </span>
                    <span>
                        <strong>Price:</strong> &#x09F3;{course.price}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <PublishUnpublishCourse course={course} />
                        <UpdateCourse course={course} />
                        <DeleteCourse course={course} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
