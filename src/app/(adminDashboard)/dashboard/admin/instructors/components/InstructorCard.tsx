import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type InstructorCardProps = {
    instructor: {
        id: string;
        name: string;
        avatar?: string;
        title: string;
        bio: string;
    };
};

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
};

const InstructorCard = ({ instructor }: InstructorCardProps) => {
    return (
        <Card className="bg-white border border-gray-200">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12 border-2 border-[#1b7ad2]/20">
                            <AvatarImage
                                src={instructor.avatar}
                                alt={instructor.name}
                            />
                            <AvatarFallback className="bg-[#1b7ad2] text-white font-medium">
                                {getInitials(instructor.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-lg">
                                {instructor.name}
                            </CardTitle>
                            <CardDescription>
                                {instructor.title}
                            </CardDescription>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {instructor.bio}
                </p>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        Edit
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default InstructorCard;
