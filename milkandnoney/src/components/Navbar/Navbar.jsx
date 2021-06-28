import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

 const Navbar =() =>{
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMoblieMenu = () => setClick(false);

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(true);
      } else {
         setButton(true);
      }
   };

   useEffect(() => {
      showButton();
   }, []);

   window.addEventListener('resize', showButton);

   return (
      <header className ="headIndex" >  
          
            <Link to='/about' className='imgLogoDiv'>
            <img className="logoImg" src="/images/Milk_And_Honey_logos_white.png" alt="Logo" onClick={closeMoblieMenu}/>
             </Link>
         <Link to='/history-trail' className='imgWelcomeDiv'>
      
                 <img className="welcomeImg" src="/images/navpicoff.jpg" alt="welcome" /> 
                 </Link>
             
         <nav className ="navbar">
             <div className ="navbar-container">  
               <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                       <Link to='/'className='nav-links' onClick={closeMoblieMenu}> Home </Link></li>
                    <li className='nav-item'>
                       <Link to='/history-trail'className='nav-links'onClick={closeMoblieMenu}> History </Link></li>
                    <li className='nav-item'>
                       <Link to='/recipes' className='nav-links'onClick={closeMoblieMenu}> Recipes </Link></li>   

                          <li className='nav-item'>
                       <Link to='/join-me' className='nav-links'onClick={closeMoblieMenu}> Join In</Link></li> 
                    
          </ul>
                     
 </div>                                           
      </nav> 
    </header>
              )             
}
export default Navbar








