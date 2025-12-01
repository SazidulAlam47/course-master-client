import Container from '@/components/Container';
import { stats } from '@/constants/about.constant';

const Stats = () => {
    return (
        <section className="py-20 bg-[#1b7ad2]">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Our Impact
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto text-pretty">
                        Numbers that reflect our commitment to transforming
                        lives through education.
                    </p>
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {stats.map(({ value, label }) => (
                        <div key={label}>
                            <div className="text-4xl font-bold text-white mb-2">
                                {value}
                            </div>
                            <div className="text-blue-100">{label}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Stats;
