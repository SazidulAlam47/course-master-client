'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

const PaymentSuccessPage = () => {
    const router = useRouter();
    const [count, setCount] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                router.push('/dashboard/student');
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [router, count]);

    return (
        <div className="min-h-[80dvh] flex items-center justify-center">
            <div className="text-center">
                <FaCircleCheck color="#23b93c" size={100} className="mx-auto" />
                <h4 className="text-2xl font-semibold mt-8">Payment Success</h4>
                <p className="mt-8">
                    You will be redirected in {count} seconds...
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
