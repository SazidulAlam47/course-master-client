import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { IEnrollment } from '@/types';
import getInitials from '@/utils/getInitials';

type EnrollmentCardProps = {
    enrollment: IEnrollment;
};

const EnrollmentCard = ({ enrollment }: EnrollmentCardProps) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                <AvatarImage
                    src={enrollment.studentId.image}
                    alt={enrollment.studentId.name}
                />
                <AvatarFallback className="bg-[#1b7ad2] text-white font-medium">
                    {getInitials(enrollment.studentId.name)}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                        {enrollment.studentId.name}
                    </h3>
                </div>
                <p className="text-sm text-gray-500 truncate">
                    {enrollment.studentId.email}
                </p>
            </div>

            <div className="hidden md:block text-right min-w-[200px]">
                <p className="font-medium text-gray-900 truncate">
                    {enrollment.courseId.title}
                </p>
                <p className="text-sm text-gray-500">
                    Enrolled{' '}
                    {new Date(enrollment.createdAt).toLocaleDateString()}
                </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 min-w-[150px]">
                <Progress value={enrollment.progress} className="h-2 flex-1" />
                <span className="text-sm font-medium text-gray-600 w-10">
                    {enrollment.progress}%
                </span>
            </div>
        </div>
    );
};

export default EnrollmentCard;
