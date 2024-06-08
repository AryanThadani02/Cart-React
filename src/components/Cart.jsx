// src/components/Cart.jsx
import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const Cart = ({ cartItems, updateCart, clearCart }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <i className="fas fa-shopping-cart cart-icon"></i>
        <span className="cart-count">{totalItems}</span>
      </div>
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              updateCart={updateCart}
            />
          ))
        )}
      </div>
      <Total cartItems={cartItems} />
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
