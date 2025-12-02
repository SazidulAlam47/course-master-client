import AboutCTA from '@/components/AboutPage/AboutCTA';
import AboutHero from '@/components/AboutPage/AboutHero';
import MissionVision from '@/components/AboutPage/MissionVision';
import Stats from '@/components/AboutPage/Stats';
import Team from '@/components/AboutPage/Team';
import Values from '@/components/AboutPage/Values';

const AboutPage = () => {
    return (
        <>
            <AboutHero />
            <MissionVision />
            <Values />
            <Team />
            <Stats />
            <AboutCTA />
        </>
    );
};

export default AboutPage;
