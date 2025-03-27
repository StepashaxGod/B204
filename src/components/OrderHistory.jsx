import React, { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Date: {order.date}</p>
            <p>Total: €{order.totalPrice.toFixed(2)}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
