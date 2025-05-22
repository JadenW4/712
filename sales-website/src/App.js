// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';


// Import your pages
import Home from './pages/Home';
import Category1 from './pages/Category1';
import Category2 from './pages/Category2';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ FIXED: Accepts product AND quantity from Card.js
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
        <Link to="/category1" style={{ color: 'white', marginRight: '1rem' }}>Category 1</Link>
        <Link to="/category2" style={{ color: 'white', marginRight: '1rem' }}>Category 2</Link>
        <Link to="/cart" style={{ color: 'white' }}>
          Cart ({cartItems.reduce((a, c) => a + c.quantity, 0)})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category1" element={<Category1 addToCart={addToCart} />} />
        <Route path="/category2" element={<Category2 addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateCartItemQuantity={updateCartItemQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
