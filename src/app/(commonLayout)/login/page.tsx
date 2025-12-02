import Container from '@/components/Container';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="flex-1 flex items-center justify-center py-12 px-4">
                <Container className="max-w-md">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-muted-foreground">
                            Sign in to continue your learning journey
                        </p>
                    </div>

                    <LoginForm />
                </Container>
            </main>
        </div>
    );
};

export default LoginPage;
