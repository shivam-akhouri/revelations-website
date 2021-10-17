import React from 'react';
import './footer.css';
import youtube from './socials/youtube.svg';
import facebook from './socials/facebook.svg';
import linkedin from './socials/linkedin.svg';
import twitter from './socials/twitter.svg';
import instagram from './socials/instagram.svg';
//import foot from '.src/App';
//import ReactDOM from 'react-dom';
//import { SocialIcon } from 'react-social-icons';
function footer(){
    return (
      <div className="container">
        <div className="contact-header">
          <h1 style={{fontSize: '150%',color:'beige'}}>Contact Us</h1>
        </div>
        <div className="contact-content">
        
          <h3 style={{color:'beige'}}>Reach out to us at <a className="email-link" href="androidclub@vit.ac.in">androidclub@vit.ac.in</a></h3>
      
        </div>
        <div className="social-buttons">
          <a href="https://www.youtube.com/channel/UCYxZ1ErnxRT3Cp_r03v4GfA">
            <div className="red-circle1">
              <img src={youtube} alt="YouTube icon" width='40' height='40'class='red' fill='red' stroke='green' />
            </div>
          </a>
          <a href="https://twitter.com/CampusAndroid">
            <div className="blue-circle2">
              <img src={twitter} alt="Twitter icon" width='40' height='40'/>
            </div>
          </a>
          <a href="https://www.facebook.com/AndroidCLUB121/">
            <div className="blue-circle3">
              <img src={facebook} alt="Facebook icon" width='40' height='40'/>
            </div>
          </a>
          <a href="https://www.instagram.com/androidvitc/">
            <div className="pink-circle1">
              <img src={instagram} alt="Instagram icon" width='40' height='40'/>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/android-club-vitc/">
            <div className="blue-circle2">
              <img src={linkedin} alt="LinkedIn icon" width='40' height='40'/>
            </div>
          </a>
        </div>
      </div>
    );
  };
export default footer;