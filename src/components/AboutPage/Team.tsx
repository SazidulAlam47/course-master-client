import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/constants/about.constant';
import Image from 'next/image';

const Team = () => {
    return (
        <>
            <section className="py-20">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
                            Passionate educators, technologists, and innovators
                            working together to transform education.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map(({ image, name, role, bio }) => (
                            <Card
                                key={name}
                                className="p-6 text-center hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-0">
                                    <div className="mb-4">
                                        <div className="w-fit mx-auto">
                                            <Image
                                                src={image}
                                                alt={name}
                                                width={500}
                                                height={500}
                                                className="size-20 rounded-full mr-3"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {name}
                                    </h3>
                                    <p className="text-[#1b7ad2] font-medium mb-3">
                                        {role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {bio}
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

export default Team;
