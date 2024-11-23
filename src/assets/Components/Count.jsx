import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import "odometer/themes/odometer-theme-default.css";
import Odometer from "odometer";
import './Count.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHeart, faShare} from '@fortawesome/free-solid-svg-icons';

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  const counters = [
    { icon: <FontAwesomeIcon icon={faStar} />, number: 168, label: "Design" },
    { icon: <FontAwesomeIcon icon={faShare} />, number: 2590, label: "Marketing" },
    { icon: <FontAwesomeIcon icon={faHeart} />, number: 347, label: "Development" },
    { icon: "♠️", number: 191, label: "User Experience" },
  ];


  const odometerRefs = useRef([]);

  
  useEffect(() => {
    if (inView) {
      counters.forEach((counter, index) => {
        if (odometerRefs.current[index]) {
          new Odometer({
            el: odometerRefs.current[index],
            value: 0,  
            format: "(,ddd)", 
            theme: "default",
          }).update(counter.number); 
        }
      });
    }
  }, [inView, counters]);

  return (
    <div className="counter-section" ref={ref}>
      <div className="counter-grid">
        {counters.map((counter, index) => (
          <div className="counter-item" key={index}>
            <div className="icon">{counter.icon}</div>
            <div
              className="odometer"
              ref={(el) => (odometerRefs.current[index] = el)}  
              style={{ fontSize: "36px", fontWeight: "bold" }}
            >
              0  
            </div>
            <div className="label">{counter.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
