import React, { useState, useEffect } from "react";
import "./Clients.css";
import img from '../Components/c1.png'
import img2 from '../Components/c2.png'
import img3 from '../Components/c3.png'
import img4 from '../Components/c4.png'
import img5 from '../Components/c5.png'

const Carousel = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const carousel = document.querySelector(".clients-carousel");

    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true); 
          } else {
            setStartAnimation(false); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (carousel) {
      observer.observe(carousel);
    }
 
    return () => {
      if (carousel) {
        observer.unobserve(carousel);
      }
    };
  }, []);

  return (
    <div className="clients-section">
      <h2 className="clients-title">Our Clients</h2>
      <p className="clients-subtitle">
        We're proud to work with some of the most reputable brands in the industry.
      </p>
      <div className="clients-carousel">
        <div className={`clients-track ${startAnimation ? "animate" : ""}`}>
          <div className="client-logo">
            <img src={img} alt="Client 1" />
          </div>
          <div className="client-logo">
            <img src={img2} alt="Client 2" />
          </div>
          <div className="client-logo">
            <img src={img} alt="Client 3" />
          </div>
          <div className="client-logo">
            <img src={img3} alt="Client 4" />
          </div>
          <div className="client-logo">
            <img src={img4} alt="Client 1" />
          </div>
          <div className="client-logo">
            <img src={img5}alt="Client 2" />
          </div>
          <div className="client-logo">
            <img src={img4} alt="Client 3" />
          </div>
          <div className="client-logo">
            <img src={img3} alt="Client 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
