import Container from '@/components/Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import authOptions from '@/nextAuth/authOptions';
import capitalize from '@/utils/capitalize';
import { getServerSession } from 'next-auth';

const ProfilePage = async () => {
    const session = await getServerSession(authOptions);
    const user = session?.user;

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <Container className="py-10">
            <Card className="max-w-md mx-auto bg-white border border-gray-200 shadow-sm">
                <CardContent className="flex flex-col items-center text-center pt-8 pb-6">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-[#1b7ad2]/20">
                        <AvatarImage src={user?.image || undefined} />
                        <AvatarFallback className="bg-[#1b7ad2] text-white text-2xl font-semibold">
                            {getInitials(user?.name || 'U')}
                        </AvatarFallback>
                    </Avatar>

                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                        {user?.name || 'User'}
                    </h2>

                    <p className="text-gray-500 text-sm mb-3">{user?.email}</p>

                    <Badge className="bg-[#1b7ad2] hover:bg-[#1565b8] text-white px-3 py-1">
                        {capitalize(user?.role || 'user')}
                    </Badge>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProfilePage;
