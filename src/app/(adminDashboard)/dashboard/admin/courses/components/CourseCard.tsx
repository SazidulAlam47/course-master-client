import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type CourseCardProps = {
    course: {
        id: string;
        title: string;
        description: string;
        price: number;
        instructor: string;
        duration: string;
        batches: {
            id: string;
            name: string;
            startDate: string;
        }[];
    };
};

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1b7ad2]/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#1b7ad2]" />
                    </div>
                    <div>
                        <CardTitle className="text-lg">
                            {course.title}
                        </CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <span>
                        <strong>Instructor:</strong> {course.instructor}
                    </span>
                    <span>
                        <strong>Duration:</strong> {course.duration}
                    </span>
                    <span>
                        <strong>Price:</strong> ৳{course.price}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Batches:</span>
                        {course.batches.length > 0 ? (
                            course.batches.map((batch) => (
                                <Badge
                                    key={batch.id}
                                    variant="outline"
                                    className="text-xs"
                                >
                                    {batch.name} -{' '}
                                    {new Date(
                                        batch.startDate
                                    ).toLocaleDateString()}
                                </Badge>
                            ))
                        ) : (
                            <span className="text-sm text-gray-400">
                                No batches
                            </span>
                        )}
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            Edit
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
