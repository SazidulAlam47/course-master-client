import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import getInitials from '@/utils/getInitials';

type Enrollment = {
    id: string;
    studentName: string;
    studentEmail: string;
    studentImage?: string;
    courseName: string;
    batchName: string;
    enrolledAt: string;
    progress: number;
    status: 'active' | 'completed' | 'dropped';
};

const getStatusColor = (status: string) => {
    switch (status) {
        case 'active':
            return 'bg-blue-100 text-blue-700';
        case 'completed':
            return 'bg-green-100 text-green-700';
        case 'dropped':
            return 'bg-red-100 text-red-700';
        default:
            return 'bg-gray-100 text-gray-700';
    }
};

const EnrollmentCard = ({ enrollment }: { enrollment: Enrollment }) => {
    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                <AvatarImage
                    src={enrollment.studentImage}
                    alt={enrollment.studentName}
                />
                <AvatarFallback className="bg-[#1b7ad2] text-white font-medium">
                    {getInitials(enrollment.studentName)}
                </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                        {enrollment.studentName}
                    </h3>
                    <Badge
                        className={`${getStatusColor(
                            enrollment.status
                        )} hover:${getStatusColor(enrollment.status)}`}
                    >
                        {enrollment.status}
                    </Badge>
                </div>
                <p className="text-sm text-gray-500 truncate">
                    {enrollment.studentEmail}
                </p>
            </div>

            <div className="hidden md:block text-right min-w-[200px]">
                <p className="font-medium text-gray-900 truncate">
                    {enrollment.courseName}
                </p>
                <p className="text-sm text-gray-500">
                    {enrollment.batchName} • Enrolled{' '}
                    {new Date(enrollment.enrolledAt).toLocaleDateString()}
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
