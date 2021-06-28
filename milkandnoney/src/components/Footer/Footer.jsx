import React from 'react';
import './Footer.css';
// import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <div className='footer-container'>    
  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>About Us</h3>
            <Link to='/join-me'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Contact Us</h3>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
              <Link to='/about' className='imgLogoDiv'>
            <img className="logoImg" src="/images/Milk_And_Honey_logos_white.png" alt="Logo"/>
             </Link>
      </div>
 
      <section class='social-media'>
        <div class='social-media-wrap'>
         
      
          <div class='social-icons'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>


          </div>
        
        </div>
      <small class='website-rights'>Milk & Honey © 2021</small>
        
      </section>
    </div>
         
  );
}

export default Footer;



