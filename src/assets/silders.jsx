import React, { useState } from 'react';
import './Sliders.css'; 

const Carousel = () => {
  const images = [
    <img src='./slider3.png'></img>,
    <img src='./slider3.png'></img>,
    <img src='./slider3.png'></img>
     
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
 
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-control prev" onClick={prevImage}>
        &#10094;
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Carousel"
        className="carousel-image"
      />
      <button className="carousel-control next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
