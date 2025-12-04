import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/shared/CourseCard';
import { getAllCourses } from '@/services/actions/courseActions';

const CoursesPage = async () => {
    const courses = await getAllCourses();

    return (
        <>
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionHeading
                        title="Our Courses"
                        description="Start your learning journey with our 
                            courses"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard course={course} key={index} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default CoursesPage;
