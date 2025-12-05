import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaCircleCheck } from 'react-icons/fa6';

const PaymentSuccessPage = () => {
    return (
        <div className="min-h-[80dvh] flex items-center justify-center">
            <div className="text-center space-y-5">
                <FaCircleCheck color="#23b93c" size={100} className="mx-auto" />
                <h4 className="text-2xl font-semibold ">Payment Success</h4>
                <p>
                    Thank you for your payment! Your transaction was completed
                    successfully.
                </p>
                <Link href="/dashboard/student">
                    <Button>Go to Dashboard</Button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccessPage;
