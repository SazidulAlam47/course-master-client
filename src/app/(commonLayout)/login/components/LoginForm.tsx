'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import googleImg from '@/assets/google.svg';
import Image from 'next/image';
import LForm from '@/components/form/LForm';
import LInput from '@/components/form/LInput';
import LInputPassword from '@/components/form/LInputPassword';
import { FieldValues } from 'react-hook-form';
import { loginDefaultValues } from '@/constants/auth.constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/schemas/auth.schema';
import { signIn } from 'next-auth/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const router = useRouter();

    const handleLogin = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in...');
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });
            if (res?.ok) {
                toast.success('Logged in successfully!', { id: toastId });
                router.push('/dashboard');
            } else {
                toast.error(res?.error || 'Something went wrong', {
                    id: toastId,
                });
            }
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    const handleGoogleLogin = () => {
        signIn('google', {
            callbackUrl: '/dashboard',
        });
    };

    return (
        <Card className="shadow-lg border-border">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <LForm
                    onSubmit={handleLogin}
                    defaultValues={loginDefaultValues}
                    resolver={zodResolver(loginSchema)}
                >
                    <LInput
                        name="email"
                        label="Email"
                        placeholder="Enter your Email"
                    />
                    <LInputPassword />
                    <div className="flex items-center justify-end">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Button className="w-full">Sign In</Button>
                </LForm>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">
                            Or
                        </span>
                    </div>
                </div>

                <Button
                    variant="outline"
                    className="border-border hover:bg-accent bg-transparent w-full"
                    onClick={handleGoogleLogin}
                >
                    <Image
                        src={googleImg}
                        alt="G"
                        width={500}
                        height={500}
                        className="size-5"
                    />
                    Sign in with Google
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/register"
                        className="text-primary hover:text-primary/80 font-medium"
                    >
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default LoginForm;
