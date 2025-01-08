import React, { useRef, useState } from 'react';

const Carousel = () => {
  const images = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h3>Image Carousel</h3>
      <div>
        <img
          ref={carouselRef}
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          style={{ width: '300px', height: '200px', objectFit:'contain'}}
        />
      </div>
      <button onClick={prevImage} className='btn btn-success m-1'>Prev</button>
      <button onClick={nextImage} className='btn btn-primary m-1'>Next</button>
    </div>
  );
}

export default Carousel;
