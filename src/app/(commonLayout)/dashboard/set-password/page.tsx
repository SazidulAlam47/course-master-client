import Container from '@/components/Container';
import SetPassword from './components/SetPassword';

const ChangePasswordPage = () => {
    return (
        <div className="min-h-[80dvh] bg-background flex flex-col">
            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <Container className="max-w-md">
                    <SetPassword />
                </Container>
            </main>
        </div>
    );
};

export default ChangePasswordPage;
