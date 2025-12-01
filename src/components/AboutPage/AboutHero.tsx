import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';

const AboutHero = () => {
    return (
        <>
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
                <Container>
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="mb-6 bg-white text-[#1565c0] hover:bg-gray-50 border border-[#1b7ad2]/20">
                            About Course Master
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                            Empowering learners to achieve their dreams
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 text-pretty leading-relaxed">
                            We believe that quality education should be
                            accessible to everyone. Our mission is to
                            democratize learning through innovative technology
                            and world-class content.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default AboutHero;
