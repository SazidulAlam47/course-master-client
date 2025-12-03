import { TCourse } from '@/types';
import CourseSyllabusCard from './CourseSyllabusCard';

type CourseSyllabusProps = {
    syllabus: TCourse['syllabus'];
};

const CourseSyllabus = ({ syllabus }: CourseSyllabusProps) => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Course Syllabus
        </h2>
        <div className="space-y-3">
            {syllabus.map((module, index) => (
                <CourseSyllabusCard
                    key={index}
                    index={index}
                    title={module.title}
                    duration={module.duration}
                />
            ))}
        </div>
    </section>
);

export default CourseSyllabus;
