import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Container from '../Container';
import SectionHeading from '../SectionHeading';

const FeaturedCourses = () => {
    const courses = [
        {
            title: 'Complete Web Development Bootcamp',
            description:
                'Learn HTML, CSS, JavaScript, React, and Node.js from scratch',
            price: 'Free',
        },
    ];

    return (
        <>
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionHeading
                        title="Featured Courses"
                        description="Start your learning journey with our most popular
                            courses"
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <Card
                                key={index}
                                className="rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200 group py-0 gap-0 overflow-hidden"
                            >
                                <CardHeader className="p-0">
                                    <div className="relative">
                                        <div className="w-full h-48 bg-gray-500"></div>
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
                                        <span className="text-2xl font-bold text-[#1b7ad2]">
                                            {course.price}
                                        </span>
                                        <Button
                                            variant="outline"
                                            className="border-[#1b7ad2] text-[#1b7ad2] hover:bg-[#1b7ad2] hover:text-white bg-transparent"
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default FeaturedCourses;
