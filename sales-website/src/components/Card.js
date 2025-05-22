import React, { useState } from 'react';
import ModalWindow from './ModalWindow';

function Card({ product, onAddToCart }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // reset quantity
  };

  return (
    <>
      <div className="card">
        <img
          src={product.image}
          alt={product.title}
          onClick={() => setModalOpen(true)}
          style={{ cursor: 'pointer' }}
        />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      {modalOpen && (
        <ModalWindow
          onClose={() => setModalOpen(false)}
          title={product.title}
          description={product.description}
        >
          <img src={product.image} alt={product.title} />
        </ModalWindow>
      )}
    </>
  );
}

export default Card;
