// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import products from "../products";

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
