import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Container from '../Container';
import Link from 'next/link';

const CTABand = () => {
    return (
        <section className="py-16 bg-[#1b7ad2]">
            <Container className="max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-white mb-4 text-balance">
                    Build skills with structured learning
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Join thousands of learners who have transformed their
                    careers with Course Master
                </p>
                <Link href="/courses">
                    <Button
                        size="lg"
                        className="bg-white text-[#1b7ad2] hover:bg-gray-100"
                    >
                        Start Learning
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </Container>
        </section>
    );
};

export default CTABand;
