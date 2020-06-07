import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  // stripe wants price in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GrTMTF1X5EtJ3fQdcVa5WSPywJ3BOrQRKWMgC4J0LJtLJD4ySEFiXMiLkFbHr05srC2nxizdNMwJpYdBaLAijgM00mrzHZtOK";

  const onToken = (token) => {
    // pass to backend and create the charge
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeButton;
