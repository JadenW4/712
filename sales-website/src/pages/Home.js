import React from 'react';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';
import PromoCarousel from '../components/PromoCarousel'; // Added this line

function Home() {
  return (
    <div className="container">
      <PromoCarousel /> {/* Promo image section added at the top */}

      <h1>Welcome to the Sales Website</h1>

      <Slideshow />

      <p>Explore our categories below:</p>
      <div className="product-grid">
        <div className="card">
          <h3>Category 1</h3>
          <p>High-end Cameras</p>
          <Link to="/category1">
            <button>Shop Now</button>
          </Link>
        </div>
        <div className="card">
          <h3>Category 2</h3>
          <p>Professional Lenses</p>
          <Link to="/category2">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
