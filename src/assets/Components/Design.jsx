import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Design.css";

const skills = [
  { name: "Design", percentage: 65 },
  { name: "Marketing", percentage: 90 },
  { name: "Development", percentage: 87 },
  { name: "User Experience", percentage: 70 },
];

const SkillSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const barVariants = {
    hidden: { width: "0%" },
    visible: (percentage) => ({
      width: `${percentage}%`,
      transition: { duration: 1.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="skill-section" ref={ref}>
      <div className="content-wrapper">
       
        <div className="left-content">
          <h1 className="heading">Engaging, Creative Page and Purposeful Theme.</h1>
          <p className="subtitle">
            Express yourself and your business through this amazing theme
          </p>
          <p className="description">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
            dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut
            imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat
            sed fermentum feugiat, velit mauris egestas quam, ut aliquam exam.
          </p>
        </div>

         
        <div className="right-content">
          {skills.map((skill, index) => (
            <div className="skill-bar" key={index}>
              <div className="skill-label">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-container">
                <motion.div
                  className="progress-bar"
                  custom={skill.percentage}
                  initial="hidden"
                  animate={controls}
                  variants={barVariants}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
