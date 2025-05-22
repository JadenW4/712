import React from 'react';

function Cart({ cartItems, updateCartItemQuantity }) {
  const handleChange = (productId, change) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      const newQty = item.quantity + change;
      updateCartItemQuantity(productId, Math.max(newQty, 0));
    }
  };

  const handleRemove = (productId) => {
    updateCartItemQuantity(productId, 0);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxRate = 0.08875; // NY tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty 🛒</p>
        </div>
      ) : (
        <div className="cart-box">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)} each</p>
                <div className="cart-controls">
                  <button onClick={() => handleChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleChange(item.id, 1)}>+</button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    style={{
                      background: '#dc3545',
                      padding: '0.4rem 0.6rem',
                    }}
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
                <div className="cart-price">
                  Item Total: ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>NY Tax (8.875%): ${tax.toFixed(2)}</p>
            <p className="subtotal">Total: ${total.toFixed(2)}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
