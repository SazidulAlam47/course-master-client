import CTABand from '@/components/HomePage/CTABand';
import FeaturedCourses from '@/components/HomePage/FeaturedCourses';
import FeaturesSection from '@/components/HomePage/FeaturesSection';
import HeroSection from '@/components/HomePage/HeroSection';
import HowItWorks from '@/components/HomePage/HowItWorks';
import Testimonials from '@/components/HomePage/Testimonials';

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeaturedCourses />
            <HowItWorks />
            <FeaturesSection />
            <Testimonials />
            <CTABand />
        </>
    );
};

export default HomePage;
