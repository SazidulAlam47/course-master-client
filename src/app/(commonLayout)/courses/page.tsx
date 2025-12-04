import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/shared/CourseCard';
import { ICourse } from '@/types';

const CoursesPage = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/courses`,
        {
            next: { revalidate: 60 },
        }
    );
    const data = await res.json();
    const courses: ICourse[] = data.data;

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
