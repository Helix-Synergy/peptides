import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const paymentId = searchParams.get('razorpay_payment_id');
    const referenceId = searchParams.get('razorpay_payment_link_reference_id');

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <CheckCircle className="w-24 h-24 text-green-500 mb-6 animate-bounce" />
            <h1 className="text-4xl font-bold text-[#0f2920] mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md text-justify">
                Thank you for your payment. Your transaction has been completed successfully.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8 w-full max-w-md border border-gray-100">
                <div className="flex justify-between mb-2">
                    <span className="text-gray-500">Payment ID:</span>
                    <span className="font-mono font-medium">{paymentId || 'N/A'}</span>
                </div>
                {referenceId && (
                    <div className="flex justify-between">
                        <span className="text-gray-500">Reference:</span>
                        <span className="font-mono font-medium">{referenceId}</span>
                    </div>
                )}
            </div>

            <div className="space-x-4">
                <Link
                    to="/"
                    className="inline-block px-8 py-3 bg-[#0f2920] text-white rounded-full font-semibold hover:bg-[#1a3c2f] transition-colors shadow-lg"
                >
                    Return Home
                </Link>
                <Link
                    to="/contact"
                    className="inline-block px-8 py-3 border-2 border-[#0f2920] text-[#0f2920] rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                    Contact Support
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
