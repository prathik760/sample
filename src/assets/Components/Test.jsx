import React, { useState, useEffect } from "react";
import "./Test.css";

const testimonials = [
  {
    quote: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,lorem quis bibendum auctorUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "RAYMOND MYERS",
    role: "Pingdom",
  },
  {
    quote:
      "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequatquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "JANE DOE",
    role: "TechCorp",
  },
  {
    quote:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,lorem quis bibendum auctorquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    author: "JOHN SMITH",
    role: "WebTech",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Slide changes every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Testimonials</h2>
        <div className="title-underline"></div>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            {index === currentIndex && (
              <>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <h3>{testimonial.author}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </>
            )}
          </div>
        ))}
        <div className="testimonial-pagination">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
