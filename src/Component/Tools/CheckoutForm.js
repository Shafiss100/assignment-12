import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const price = 500;
  const [clientSecret, setClintSecret] = useState("");

  useEffect(() => {
    fetch("https://warm-temple-42525.herokuapp.com/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({ price }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClintSecret(data.clientSecret);
        }
      });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error?.message) {
      setCardError(error.message);
      console.log(error);
    } else {
      setCardError(" ");
    }
  };

  //     const {paymentIntent, error: interror} = await stripe.confirmCardPayment(
  //   'sk_test_51L3gEQAYy1XCHpmnuiYE3tNtk6Y07wX2abgJ8XJJHuIWzFs0WalIw2bqloI1uppiNCgnm1oHZcy56ofNCmGuW6ZV00ejFbzYEB',
  //   {
  //     payment_method: {
  //       card: cardElement,
  //       billing_details: {
  //         name: 'Jenny Rosen',
  //       },
  //     },
  //   },
  // );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="green" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-700">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
