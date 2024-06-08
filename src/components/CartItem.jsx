// src/components/CartItem.jsx
import React from "react";

const CartItem = ({ item, updateCart }) => {
  const incrementQuantity = () => {
    updateCart(item.product, item.quantity + 1);
  };

  const decrementQuantity = () => {
    updateCart(item.product, item.quantity - 1);
  };

  return (
    <div className="cart-item">
      <img src={item.product.image} alt={item.product.name} />
      <div className="item-details">
        <h3>{item.product.name}</h3>
        <p>${item.product.price.toFixed(2)}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={decrementQuantity}>-</button>
        <input type="number" value={item.quantity} readOnly />
        <button onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
