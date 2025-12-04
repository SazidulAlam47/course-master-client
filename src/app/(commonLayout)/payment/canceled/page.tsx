import { FaCircleXmark } from 'react-icons/fa6';

const PaymentCanceledPage = () => {
    return (
        <div className="min-h-[80dvh] flex items-center justify-center">
            <div className="text-center">
                <FaCircleXmark color="#ff0000" size={100} className="mx-auto" />
                <h4 className="text-2xl font-semibold mt-8">
                    Payment Canceled
                </h4>
                <p className="mt-8">
                    If you need any assistance, please feel free to contact us
                    at payment@coursemaster.com
                </p>
            </div>
        </div>
    );
};

export default PaymentCanceledPage;
