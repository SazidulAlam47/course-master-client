import Container from '../../Container';
import { TCourse } from '@/types';
import CourseHeroLeft from './CourseHeroLeft';
import CourseHeroRight from './CourseHeroRight';

type CourseDetailsHeroProps = {
    course: TCourse;
};

const CourseDetailsHero = ({ course }: CourseDetailsHeroProps) => {
    return (
        <section className="bg-white border-b">
            <Container>
                <div className="py-8 lg:py-12">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <CourseHeroLeft course={course} />
                        <CourseHeroRight course={course} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CourseDetailsHero;
