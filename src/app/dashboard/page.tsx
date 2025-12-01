import Container from '@/components/Container';
import authOptions from '@/nextAuth/authOptions';
import { getServerSession } from 'next-auth';

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    return (
        <Container className="py-10">
            <p>This is DashboardPage</p>
            <p>Name: {session?.user?.name}</p>
        </Container>
    );
};

export default DashboardPage;
