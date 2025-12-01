import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';

const MissionVision = () => {
    return (
        <>
            <section className="py-20">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                To make high-quality education accessible to
                                learners worldwide, breaking down barriers and
                                creating opportunities for personal and
                                professional growth.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We&apos;re committed to fostering a global
                                community of lifelong learners who can adapt,
                                innovate, and thrive in an ever-changing world.
                            </p>
                        </div>
                        <Card className="p-8 bg-gradient-to-br from-[#1b7ad2]/5 to-blue-50 border-[#1b7ad2]/20">
                            <CardContent className="p-0">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    A world where anyone, anywhere, can access
                                    the education they need to unlock their
                                    potential and create meaningful impact in
                                    their communities.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default MissionVision;
