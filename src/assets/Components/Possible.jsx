import React from 'react';
import './Possible.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'  
const Possible = () => {
  return (
    <div className="container">
      <div className="row">
         
        <div className="feature">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faGlobe} className='love'/>
          </div>
          <h3 className='ph3'>Discover What’s Possible</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.</p>
        </div>

         
        <div className="feature">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faShare} className='love' />
          </div>
          <h3 className='ph3'>People Really Matter</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.</p>
        </div>

         
        <div className="feature">
          <div className="feature-icon">
            <FontAwesomeIcon icon={faHeart} className='love'/>
          </div>
          <h3 className='ph3'>Having A Plan Feels Good</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.</p>
        </div>
      </div>
    </div>
  );
};

export default Possible;
