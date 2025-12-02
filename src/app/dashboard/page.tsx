import authOptions from '@/nextAuth/authOptions';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    const role = session?.user.role;

    if (role) {
        redirect(`/dashboard/${role}`);
    }

    redirect('/');
};

export default DashboardPage;
