import React from 'react';
import './Simple.css';
import img1 from '../Components/slide1.png';
import img2 from '../Components/slide3.png';
import img3 from '../Components/slide2.png';

const Simple = () => {
  return (
    <div className="box">
      <div className="clients-section">
        <h2 className="clients-title">SIMPLE AND CLEAN SOLUTIONS</h2>
        <p className="clients-subtitle">
          Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh
        </p>
      </div>
      <div className="image-row">
        <div className="image-item animate-bottom-2">
          <img src={img2} alt="Slide 2" />
        </div>
        <div className="image-item animate-bottom">
          <img src={img1} alt="Slide 1" />
        </div>
        <div className="image-item animate-bottom-2">
          <img src={img3} alt="Slide 3" />
        </div>
      </div>
    </div>
  );
};

export default Simple;
