import React from 'react';
import Card from '../components/Card';
import { category1Products } from '../data/category1';

function Category1({ addToCart }) {
  return (
    <div className="container">
      <h2>Category 1: Cameras</h2>
      <div className="product-grid">
        {category1Products.map((product) => (
          <Card key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Category1;
