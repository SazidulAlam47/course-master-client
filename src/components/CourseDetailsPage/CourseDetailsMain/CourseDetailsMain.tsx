import { ICourse } from '@/types';
import Container from '../../Container';
import CourseInstructor from './CourseInstructor';
import CourseSyllabus from './CourseSyllabus';

type CourseDetailsMainProps = {
    course: ICourse;
};

const CourseDetailsMain = ({ course }: CourseDetailsMainProps) => {
    return (
        <Container>
            <div className="py-12 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-12">
                    <CourseInstructor instructor={course.instructorId} />
                    <CourseSyllabus syllabus={course.lessons} />
                </div>
                <div className="hidden lg:block"></div>
            </div>
        </Container>
    );
};

export default CourseDetailsMain;
