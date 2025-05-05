import React from "react";
import './ProductList.css';

const products = [
  { id: 1, name: "Apple", price: 0.99 },
  { id: 2, name: "Banana", price: 0.59 },
  { id: 3, name: "Orange", price: 0.79 },
];

function ProductList({ addToCart }) {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="add-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;