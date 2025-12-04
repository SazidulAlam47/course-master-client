import { Card, CardContent } from '@/components/ui/card';
import { ICourse } from '@/types';
import Image from 'next/image';
import { TbCurrencyTaka } from 'react-icons/tb';
import CourseEnrollButton from './CourseEnrollButton';

type CourseHeroRightProps = {
    course: ICourse;
};

const CourseHeroRight = ({ course }: CourseHeroRightProps) => {
    return (
        <div className="lg:col-span-1">
            <Card className="sticky top-4 overflow-hidden shadow-lg p-0 pb-6">
                <div className="relative">
                    <Image
                        src={course.thumbnail}
                        alt={course.title}
                        height={190}
                        width={190}
                        className="w-full h-48 bg-gray-500"
                    />
                </div>

                <CardContent>
                    <div className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                        <TbCurrencyTaka className="text-3xl" />
                        {course.price}
                    </div>
                    <CourseEnrollButton course={course} />
                </CardContent>
            </Card>
        </div>
    );
};

export default CourseHeroRight;
