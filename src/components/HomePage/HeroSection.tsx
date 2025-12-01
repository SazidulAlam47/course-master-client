import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Container from '../Container';
import Image from 'next/image';
import heroImage from '@/assets/hero.png';

const HeroSection = () => {
    return (
        <section className="py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
                            Learn smarter. Track progress.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Access admin-managed courses with structured modules
                            and lectures. Track your learning journey with
                            built-in progress monitoring and unlock content
                            sequentially.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button size="lg">Browse Courses</Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#1b7ad2] text-[#1b7ad2] hover:bg-[#1b7ad2] hover:text-white bg-transparent"
                            >
                                <Play className="w-4 h-4 mr-2" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={heroImage}
                            alt="Course Master"
                            width={500}
                            height={500}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
