import React from "react";
import "./Footer.css";
 
const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-top">
        <p className="footer-quote">Less is definitely more.</p>
      </div>

      
      <div className="footer-content">
        
        <div className="footer-column">
          <h3 className="footer-heading">ABOUT US</h3>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, nam ut vero scribentur, mel veritus
            omnesque ei. Mutat labores mea ex, mei cu option indoctum, sumo
            errem partiendo ex cum.
          </p>

           
          <div className="newsletter-section">
            <h3 className="footer-heading">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter Your Email*"
                className="newsletter-input"
              />
              <button className="newsletter-button">➤</button>
            </div>
          </div>
        </div>

         
        <div className="footer-column">
          <h3 className="footer-heading">LATEST TWEETS</h3>
          <p className="footer-text">Couldn't connect with Twitter</p>
        </div>

         
        <div className="footer-column">
          <h3 className="footer-heading">INSTAGRAM</h3>
           
        </div>
      </div>

       
      <div className="footer-bottom">
        <div className="footer-logo">fleur</div>
        <div className="footer-links">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">PORTFOLIO</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="footer-copyright">
          © 2017 Qode Interactive, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
