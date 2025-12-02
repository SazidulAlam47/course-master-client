import Container from '@/components/Container';
import RegisterForm from './components/RegisterForm';

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <Container className="max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                            Join Course Master
                        </h1>
                        <p className="text-muted-foreground">
                            Create your account to start your learning journey
                        </p>
                    </div>

                    <RegisterForm />
                </Container>
            </main>
        </div>
    );
};

export default RegisterPage;
