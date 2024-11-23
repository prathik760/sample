import React from "react";
import "./Team.css";  
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from '../Components/slide1.png'
import img2 from '../Components/1.jpg'
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Cynthia Fowler",
      position: "Senior Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: img,  
    },
    {
      name: "Cynthia Fowler",
      position: "Marketing Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: img2 , 
    },
    {
      name: "Cynthia Fowler",
      position: "PR Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      image: img, 
    },
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">Our Amazing Team</h2>
      <p className="team-subtitle">
        Lorem ipsum dolor sit amet, consectetur gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-position">{member.position}</p>
            <p className="team-member-description">{member.description}</p>
            <div className="team-member-socials">
              <a href="#!" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#!" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#!" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#!" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
