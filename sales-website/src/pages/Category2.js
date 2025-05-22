import React from 'react';
import Card from '../components/Card';
import { category2Products } from '../data/category2';

function Category2({ addToCart }) {
  return (
    <div className="container">
      <h2>Category 2: Lenses</h2>
      <div className="product-grid">
        {category2Products.map((product) => (
          <Card key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Category2;
