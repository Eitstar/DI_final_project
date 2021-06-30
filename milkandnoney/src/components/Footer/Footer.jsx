import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (

    <div className='footer-container'>    
  
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h5 className='footer-h-three'>About Us</h5>
            <Link to='/join-me'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h5 className='footer-h-three'>Contact Us</h5>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h5 className='footer-h-three'>Social Media</h5>
            <Link to='https://twitter.com/MilkAnd39971477'>Instagram</Link>
            <Link to='/https://twitter.com/MilkAnd39971477'>Twitter</Link>
          </div>
        </div>
              <Link to='/about' className='imgLogoDiv'>
            <img className="logoImg" src="/images/Milk_And_Honey_logos_white.png" alt="Logo"/>
             </Link>
      </div>
 
      <section class='social-media'>
        <div class='social-media-wrap'>
         
      
          <div class='social-icons'>
           
            <a   class='social-icon-link instagram' target='_blank' aria-label='Instagram' href=" https://www.instagram.com/milk_and_honey_1_1/">

  <i class='fab fa-instagram' />
            </a>
          
              <a  class='social-icon-link' target='_blank' aria-label='Twitter' href="https://twitter.com/MilkAnd39971477">
                 <i class='fab fa-twitter' />
              </a>
             
         

          </div>
        
        </div>
      <small class='website-rights'>Milk & Honey © 2021</small>
        
      </section>
    </div>
         
  );
}

export default Footer;



