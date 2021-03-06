import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WEIqrjczOglTqcB0dYf5w8cl00UbHAoDMS";

  const onToken = (token) => {
    console.log("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      toke={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
