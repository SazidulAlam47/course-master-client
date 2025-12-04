'use client';

import { Button } from '@/components/ui/button';
import {
    useCreateEnrollmentMutation,
    useInitPaymentMutation,
} from '@/redux/api/enrollmentApi';
import { ICourse } from '@/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type CourseEnrollButtonProps = {
    course: ICourse;
};

const CourseEnrollButton = ({ course }: CourseEnrollButtonProps) => {
    const router = useRouter();
    const { status } = useSession();

    const [createEnrollment] = useCreateEnrollmentMutation();
    const [initPayment] = useInitPaymentMutation();

    const handleEnroll = async () => {
        if (status !== 'authenticated') {
            return router.push('/login');
        }

        const toastId = toast.loading('Enrolling course...');
        try {
            const enrollRes = await createEnrollment({
                courseId: course._id,
            }).unwrap();

            if (enrollRes._id) {
                const paymentRes = await initPayment({
                    enrollmentId: enrollRes._id,
                }).unwrap();
                toast.success('Proceed to payment!', { id: toastId });
                router.push(paymentRes.paymentUrl);
            }
        } catch (error: any) {
            toast.error(error.message || error.data || 'Something went wrong', {
                id: toastId,
            });
        }
    };

    return (
        <Button
            onClick={handleEnroll}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6"
        >
            Enroll Now
        </Button>
    );
};

export default CourseEnrollButton;
