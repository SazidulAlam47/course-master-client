'use client';

import { Button } from '@/components/ui/button';
import { ICourse } from '@/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type CourseEnrollButtonProps = {
    course: ICourse;
};

const CourseEnrollButton = ({ course }: CourseEnrollButtonProps) => {
    const router = useRouter();
    const { status } = useSession();

    const handleEnroll = () => {
        if (status !== 'authenticated') {
            return router.push('/login');
        }

        console.log('we are here');
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
