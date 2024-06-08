// src/components/Total.jsx
import React from "react";

const Total = ({ cartItems }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  return (
    <div className="total">
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Total;
