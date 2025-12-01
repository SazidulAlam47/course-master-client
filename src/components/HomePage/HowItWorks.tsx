import { Card, CardContent } from '@/components/ui/card';
import Container from '../Container';
import SectionHeading from '../SectionHeading';
import { steps } from '@/constants/homepage.constant';

const HowItWorks = () => {
    return (
        <>
            <section className="py-20">
                <Container>
                    <SectionHeading
                        title="How It Works"
                        description="Simple steps to start your learning journey"
                    />
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <Card
                                key={index}
                                className="text-center border-0 shadow-none bg-transparent"
                            >
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 bg-[#1b7ad2] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HowItWorks;
