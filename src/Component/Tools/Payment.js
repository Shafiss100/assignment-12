import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(
  "pk_test_51L3gEQAYy1XCHpmnmG3wQQjvRA8qNFGrhLVP9Ucg2Vw0WXuHVRq9BQqd93yABFAKYElOR1mCOZg2fU6mcDiDVhGd00zf4racq2"
);
const Payment = () => {

    return (
      <div className='m-5'>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    );
};

export default Payment;

