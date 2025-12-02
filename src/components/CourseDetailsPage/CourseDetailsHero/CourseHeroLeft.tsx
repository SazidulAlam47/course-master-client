import { TCourse } from '@/types/course.type';

type CourseHeroLeftProps = {
    course: TCourse;
};

const CourseHeroLeft = ({ course }: CourseHeroLeftProps) => {
    return (
        <div className="lg:col-span-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 italic">
                {course.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {course.description}
            </p>
        </div>
    );
};

export default CourseHeroLeft;
