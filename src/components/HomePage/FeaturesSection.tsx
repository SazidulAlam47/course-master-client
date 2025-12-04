import { Check } from 'lucide-react';
import Container from '../Container';
import { features } from '@/constants/homepage.constant';
import FeaturesSectionVideo from './FeaturesSectionVideo';

const FeaturesSection = () => {
    return (
        <>
            <section className="py-20">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Everything You Need to Learn
                            </h2>
                            <div className="space-y-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl overflow-hidden">
                            <FeaturesSectionVideo />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default FeaturesSection;
