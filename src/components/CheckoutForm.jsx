import React, { useState, useContext } from "react";
import { CarContext } from "../context/CarContext";
import "../css/CheckoutForm.css";

const CheckoutForm = () => {
  const { cartItems } = useContext(CarContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [isPaid, setIsPaid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return formData.name && formData.email && formData.address;
  };

  const handleDummyPayment = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields.");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      cartItems,
      totalPrice: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      date: new Date().toLocaleString(),
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orderHistory")) || [];
    localStorage.setItem(
      "orderHistory",
      JSON.stringify([...existingOrders, order])
    );

    setIsPaid(true);
    alert("Payment successful!");
  };

  return (
    <div className="checkout-form">
      {!isPaid ? (
        <>
          <h2>Checkout</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            onChange={handleChange}
            required
          />

          <button className="dummy-pay-btn" onClick={handleDummyPayment}>
            Pay
          </button>
        </>
      ) : (
        <h3>Payment Successful!</h3>
      )}
    </div>
  );
};

export default CheckoutForm;
