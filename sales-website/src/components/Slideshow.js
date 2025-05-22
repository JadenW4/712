import React, { useState, useEffect } from 'react';
import '../styles/slideshow.css';

const images = [
  { src: 'https://via.placeholder.com/600x300?text=Promo+1', alt: 'Promo 1' },
  { src: 'https://via.placeholder.com/600x300?text=Promo+2', alt: 'Promo 2' },
  { src: 'https://via.placeholder.com/600x300?text=Promo+3', alt: 'Promo 3' },
  { src: 'https://via.placeholder.com/600x300?text=Promo+4', alt: 'Promo 4' },
  { src: 'https://via.placeholder.com/600x300?text=Promo+5', alt: 'Promo 5' },
];

function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="slideshow">
      <img src={images[index].src} alt={images[index].alt} />
    </div>
  );
}

export default Slideshow;