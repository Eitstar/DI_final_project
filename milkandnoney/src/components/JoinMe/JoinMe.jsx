import React from 'react'
import { Button } from '../Button/Button'
const JoinMe =()=>{
return (
            <div className='footer-container'>
         <section className="footer-subscription-heading">
                <p className="footer-subscription-heading">
                          Join Newsletter to receive pur letest updteds
               </p>                       
    <div className="input-areas">
         <form >
               <input type="email" name="email" placeholder="Enter Your Email" className="footer-input" />
               <Button  buttonStyle='btn-outline'>subscribe</Button>
         </form>            
            </div>
        </section> 
    </div> 
        )


}



export default JoinMe