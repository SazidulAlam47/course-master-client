import CourseDetailsHero from '@/components/CourseDetailsPage/CourseDetailsHero/CourseDetailsHero';
import CourseDetailsMain from '@/components/CourseDetailsPage/CourseDetailsMain/CourseDetailsMain';
import { getCourseById } from '@/services/actions/courseActions';

type CourseDetailsPageProps = {
    params: Promise<{ id: string }>;
};

const CourseDetailsPage = async ({ params }: CourseDetailsPageProps) => {
    const { id } = await params;

    const course = await getCourseById(id);

    return (
        <div className="min-h-screen bg-gray-50">
            <CourseDetailsHero course={course} />
            <CourseDetailsMain course={course} />
        </div>
    );
};

export default CourseDetailsPage;
