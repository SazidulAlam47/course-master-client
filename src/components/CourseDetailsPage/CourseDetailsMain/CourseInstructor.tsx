import { IInstructor } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';

type CourseInstructorProps = {
    instructor: IInstructor;
};

const CourseInstructor = ({ instructor }: CourseInstructorProps) => (
    <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Course Instructor
        </h2>
        <div className="flex items-start gap-4">
            <Avatar className="w-20 h-20">
                <AvatarImage src={instructor.avatar} />
                <AvatarFallback className="bg-gray-300 text-gray-600 text-xl">
                    {instructor.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                </AvatarFallback>
            </Avatar>
            <div>
                <h2 className="text-xl font-semibold flex items-center gap-1">
                    {instructor.name}
                </h2>
                <p className="text-gray-600 mt-1">{instructor.title}</p>
                <p className="text-gray-500 text-sm mt-1">{instructor.bio}</p>
            </div>
        </div>
    </section>
);

export default CourseInstructor;
