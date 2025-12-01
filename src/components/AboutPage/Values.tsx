import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import { ourValues } from '@/constants/about.constant';

const Values = () => {
    return (
        <>
            <section className="py-20 bg-gray-50">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
                            These core principles guide everything we do and
                            shape the learning experience we create.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {ourValues.map(({ icon: Icon, title, description }) => (
                            <Card
                                key={title}
                                className="p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-0">
                                    <div className="w-12 h-12 bg-[#1b7ad2]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-[#1b7ad2]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {description}
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

export default Values;
