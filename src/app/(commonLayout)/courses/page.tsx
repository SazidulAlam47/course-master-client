import Container from '@/components/Container';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/shared/CourseCard';

const CoursesPage = () => {
    const courses = [
        {
            id: 'asdfasdfasdf',
            title: 'Complete Web Development Bootcamp',
            description:
                'Learn HTML, CSS, JavaScript, React, and Node.js from scratch',
            price: 1200,
            thumbnail:
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-education-youtube-thumbnail-design-template-81860c5e2c826288e86665f75958fc82_screen.jpg',
        },
    ];

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
