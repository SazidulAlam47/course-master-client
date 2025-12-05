/* eslint-disable @typescript-eslint/no-explicit-any */

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
import LForm from '@/components/form/LForm';
import LInput from '@/components/form/LInput';
import LInputPassword from '@/components/form/LInputPassword';
import { FieldValues } from 'react-hook-form';
import { registerDefaultValues } from '@/constants/auth.constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schemas/auth.schema';
import LFileUpload from '@/components/form/LFileUpload';
import { uploadImageToCloudinary } from '@/services/actions/cloudinaryUpload';
import { TUser } from '@/types';
import { registerUser } from '@/services/actions/authActions';
import { toast } from 'sonner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter();

    const handleRegister = async (data: FieldValues) => {
        const newUser: TUser = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        const toastId = toast.loading('Creating account...');
        try {
            // if image is selected, then upload the image
            if (data?.file?.size) {
                newUser.image = await uploadImageToCloudinary(data.file);
            }
            const registerRes = await registerUser(newUser);

            if (registerRes.success) {
                const loginRes = await signIn('credentials', {
                    redirect: false,
                    email: data.email,
                    password: data.password,
                });
                if (loginRes?.ok) {
                    toast.success('Account created successfully!', {
                        id: toastId,
                    });
                    router.push('/dashboard');
                } else {
                    toast.error(loginRes?.error || 'Something went wrong', {
                        id: toastId,
                    });
                }
            } else {
                toast.error(registerRes.message || 'Something went wrong', {
                    id: toastId,
                });
            }
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <Card className="shadow-lg border-border">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
                <CardDescription className="text-center">
                    Create your account to start your learning journey
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <LForm
                    onSubmit={handleRegister}
                    defaultValues={registerDefaultValues}
                    resolver={zodResolver(registerSchema)}
                >
                    <LInput
                        name="name"
                        label="Full Name"
                        placeholder="Enter your full name"
                    />
                    <LInput
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                    />
                    <LInputPassword />
                    <LFileUpload label="Profile Photo" />
                    <Button className="w-full">Sign Up</Button>
                </LForm>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="text-primary hover:text-primary/80 font-medium"
                    >
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default RegisterForm;
