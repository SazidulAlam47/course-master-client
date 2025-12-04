import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Container from '../Container';
import SectionHeading from '../SectionHeading';
import { testimonials } from '@/constants/homepage.constant';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <>
            <section className="py-20 bg-gray-50">
                <Container>
                    <SectionHeading title="What Our Students Say" />
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="rounded-lg border border-gray-200"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-4 italic">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={500}
                                            height={500}
                                            className="size-12 rounded-full mr-3"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {testimonial.role}
                                            </p>
                                        </div>
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

export default Testimonials;
