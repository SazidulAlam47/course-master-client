import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutCTA = () => {
    return (
        <section className="py-20">
            <Container className="max-w-4xl">
                <Card className="p-12 text-center bg-gradient-to-br from-gray-50 to-blue-50 border-gray-200">
                    <CardContent className="p-0">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">
                            Ready to start your learning journey?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 text-pretty">
                            Join millions of learners who are already
                            transforming their careers and lives with Learning
                            Hero.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/courses">
                                <Button size="lg" className="px-8">
                                    Get Started Today
                                </Button>
                            </Link>
                            <Link href="/courses">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                                >
                                    Browse Courses
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </section>
    );
};

export default AboutCTA;
