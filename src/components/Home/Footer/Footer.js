import React from 'react';
import { Button} from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className="footer-section">
              <div className="footer-logo">
              <img
        src="https://i.ibb.co/VT47bjD/Untitled-design-42.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt=""
      />
      <h3>CARE MEDICO</h3>
              </div>
              <div className="footer-detail">
                  <h2>Sign up for Medicare newsletter to receive all the new offers and discounts from Medicare clinic. 
                      Discounts are only valid four our newsletter subscribers.</h2>
                      <Button variant="dark"> Go for Sign In </Button>
              </div>
              <div className="footer-contact">
                  <h2>0-800-777-2031 </h2>
                  <h4>24/7 EMERGENCY NUMBER</h4>
                  <h3>all us now if you are in a medical emergency need, 
                      we will reply swiftly and provide you with a medical aid.</h3>
              </div>  
        </div>
        </div>
    );
};

export default Footer;