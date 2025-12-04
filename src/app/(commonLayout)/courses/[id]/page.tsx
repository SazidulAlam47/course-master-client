import CourseDetailsHero from '@/components/CourseDetailsPage/CourseDetailsHero/CourseDetailsHero';
import CourseDetailsMain from '@/components/CourseDetailsPage/CourseDetailsMain/CourseDetailsMain';
import { ICourse } from '@/types';

type CourseDetailsPageProps = {
    params: Promise<{ id: string }>;
};

const CourseDetailsPage = async ({ params }: CourseDetailsPageProps) => {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/courses/${id}/public`,
        {
            cache: 'no-store',
        }
    );
    const data = await res.json();
    const course: ICourse = data.data;

    return (
        <div className="min-h-screen bg-gray-50">
            <CourseDetailsHero course={course} />
            <CourseDetailsMain course={course} />
        </div>
    );
};

export default CourseDetailsPage;
