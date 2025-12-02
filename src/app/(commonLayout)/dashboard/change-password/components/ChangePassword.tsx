'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LForm from '@/components/form/LForm';
import LInputPassword from '@/components/form/LInputPassword';
import { FieldValues } from 'react-hook-form';
import { changePasswordDefaultValues } from '@/constants/auth.constant';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePasswordSchema } from '@/schemas/auth.schema';
import { changePassword } from '@/services/actions/authActions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const ChangePassword = () => {
    const router = useRouter();

    const handleRegister = async (data: FieldValues) => {
        const toastId = toast.loading('Changing password...');
        try {
            const res = await changePassword(data);

            if (res.success) {
                toast.success('Password changed successfully!', {
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
                    Change Password
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <LForm
                    onSubmit={handleRegister}
                    defaultValues={changePasswordDefaultValues}
                    resolver={zodResolver(changePasswordSchema)}
                >
                    <LInputPassword
                        name="oldPassword"
                        label="Old Password"
                        placeholder="Enter Your Old Password"
                    />
                    <LInputPassword
                        name="newPassword"
                        label="New Password"
                        placeholder="Enter Your New Password"
                    />
                    <Button className="w-full">Change Password</Button>
                </LForm>
            </CardContent>
        </Card>
    );
};

export default ChangePassword;
