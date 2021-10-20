import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
    <div>
        <div className="" >
            <br />
            <br />
            <br />
            <div className="doctor-talk">
             <h2>WELCOME TO OUR HOSPITAL</h2>
             <h1> The Care Medico of Better Care </h1>
             <h4>It’s always the word of mouth that’s the best advice. Here are some of our…</h4>
            </div>
          <div className="about-person">
              <div className="about-image">
              <img src="https://inclinic.cmsmasters.net/atlanta/wp-content/uploads/sites/2/2021/07/home-2.jpg" alt="" />
              </div>
              <div className="about-detail">
              <p className="contact-title">Care Medio Health Care(CMHC) is essential health care made universally accessible to individuals and acceptable to them, 
                  through full participation and at a cost the community and country can afford.</p>
              <h4 className="contact-text">(1)Nearly 600000 unique patients per year</h4>
              <h4>(2)2.5 million outpatient clinic visits</h4>
              <h4>(3)80000 Emergency Department visits</h4>
              <h4>(4)40000 hospital stays</h4>
              <br />
              <br />
              <button className="contact-button">About Us</button>
              </div>
          </div>
        </div>
          
    </div>
        
    );
};

export default AboutUs;