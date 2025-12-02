import { TCourse } from '@/types/course.type';
import Container from '../../Container';
import CourseInstructor from './CourseInstructor';
import CourseWhatYouWillLearn from './CourseWhatYouWillLearn';
import CourseSyllabus from './CourseSyllabus';
import CourseDescription from './CourseDescription';

type CourseDetailsMainProps = {
    course: TCourse;
};

const CourseDetailsMain = ({ course }: CourseDetailsMainProps) => {
    return (
        <Container>
            <div className="py-12 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-12">
                    <CourseInstructor instructor={course.instructor} />
                    <CourseWhatYouWillLearn items={course.whatYouWillLearn} />
                    <CourseSyllabus syllabus={course.syllabus} />
                    <CourseDescription description={course.description} />
                </div>
                <div className="hidden lg:block"></div>
            </div>
        </Container>
    );
};

export default CourseDetailsMain;
