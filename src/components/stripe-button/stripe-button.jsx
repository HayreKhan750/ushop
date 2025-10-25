// Payment.js
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheCkoutButton = () => {
  const publishableKey =
    "pk_test_51SLyk3RqsBSsJrfKkBfQ39RucV5rXytZxgpBXtVGnwR960dU4Jn1QXkAyHmuTMp86ykzSnClnJJYsBFqUuq0ANK800EKpvSekL";

  const onToken = async (token) => {
    // Send token to backend for payment processing
    const response = await fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, amount: 1000 }), // amount in cents
    });

    const data = await response.json();
    if (data.success) {
      alert("✅ Payment Successful!");
    } else {
      alert("❌ Payment Failed!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <StripeCheckout
        label="Pay Now 💳"
        name="CNCS Feedback"
        billingAddress
        shippingAddress
        description="Your total is $10"
        amount={1000} // Amount in cents
        token={onToken}
        stripeKey={publishableKey}
        currency="USD"
      />
    </div>
  );
};

export default StripeCheCkoutButton;
