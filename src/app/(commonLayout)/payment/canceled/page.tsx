import { FaCircleXmark } from 'react-icons/fa6';

const PaymentCanceledPage = () => {
    return (
        <div className="min-h-[80dvh] flex items-center justify-center">
            <div className="text-center space-y-5">
                <FaCircleXmark color="#ff0000" size={100} className="mx-auto" />
                <h4 className="text-2xl font-semibold">Payment Canceled</h4>
                <p>
                    If you need any assistance, please feel free to contact us
                    at payment@coursemaster.com
                </p>
            </div>
        </div>
    );
};

export default PaymentCanceledPage;
