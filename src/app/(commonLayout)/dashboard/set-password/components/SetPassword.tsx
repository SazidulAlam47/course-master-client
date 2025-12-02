'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LForm from '@/components/form/LForm';
import LInputPassword from '@/components/form/LInputPassword';
import { FieldValues } from 'react-hook-form';
import { changePasswordDefaultValues } from '@/constants/auth.constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { resetPasswordSchema } from '@/schemas/auth.schema';
import { setPassword } from '@/services/actions/authActions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const SetPassword = () => {
    const router = useRouter();
    const handleRegister = async (data: FieldValues) => {
        const toastId = toast.loading('Setting password...');
        try {
            const res = await setPassword(data);

            if (res.success) {
                toast.success('Password added successfully!', {
                    id: toastId,
                });
                router.push('/dashboard/profile');
            } else {
                toast.error(res.message || 'Something went wrong', {
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
                <CardTitle className="text-2xl text-center">
                    Set Password
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <LForm
                    onSubmit={handleRegister}
                    defaultValues={changePasswordDefaultValues}
                    resolver={zodResolver(resetPasswordSchema)}
                >
                    <LInputPassword
                        name="password"
                        label="Set New Password"
                        placeholder="Enter Your New Password"
                    />
                    <LInputPassword
                        name="confirmPassword"
                        label="Confirm New Password"
                        placeholder="Confirm Your New Password"
                    />
                    <Button className="w-full">Set Password</Button>
                </LForm>
            </CardContent>
        </Card>
    );
};

export default SetPassword;
