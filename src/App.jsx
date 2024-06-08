// src/App.jsx
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const updateCart = (product, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.id === product.id ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="app">
      <h1>E-commerce Cart Management System</h1>
      <ProductList addToCart={addToCart} />
      <Cart
        cartItems={cartItems}
        updateCart={updateCart}
        clearCart={clearCart}
      />
    </div>
  );
};

export default App;
