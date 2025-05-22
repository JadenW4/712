// src/components/PromoCarousel.js
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import promo1 from '../assets/images/promo1.png';
import promo2 from '../assets/images/promo2.png';
import promo3 from '../assets/images/promo3.png';
import promo4 from '../assets/images/promo4.png';
import promo5 from '../assets/images/promo5.png';

function PromoCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {[promo1, promo2, promo3, promo4, promo5].map((img, i) => (
        <div key={i}>
          <img src={img} alt={`Promo ${i + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default PromoCarousel;
