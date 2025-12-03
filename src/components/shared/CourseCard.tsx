import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { TbCurrencyTaka } from 'react-icons/tb';
import Link from 'next/link';
import { Button } from '../ui/button';
import { TCourse } from '@/types';

type CourseCardProps = {
    course: Pick<
        TCourse,
        'title' | 'thumbnail' | 'id' | 'description' | 'price'
    >;
};

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <Card className="rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200 group py-0 gap-0 overflow-hidden">
            <CardHeader className="p-0">
                <div className="relative">
                    <Image
                        src={course.thumbnail}
                        alt={course.title}
                        height={190}
                        width={190}
                        className="w-full h-48 bg-gray-500"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#1b7ad2] transition-colors">
                    {course.title}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#1b7ad2] flex items-center">
                        <TbCurrencyTaka />
                        {course.price}
                    </span>
                    <Link href={`/courses/${course.id}`}>
                        <Button
                            variant="outline"
                            className="border-[#1b7ad2] text-[#1b7ad2] hover:bg-[#1b7ad2] hover:text-white bg-transparent"
                        >
                            View Details
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
