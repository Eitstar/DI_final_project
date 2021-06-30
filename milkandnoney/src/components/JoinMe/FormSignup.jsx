import React,{useContext} from 'react'
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';
import { Appcontext } from '../pages/JoinMe';

const FormSignup=({ submitForm })=> {

  function refreshPage() {
     window.location.reload(false);
  }


   const {message,setMessage}= useContext(Appcontext);
      const{handleChange, handleSubmit, values, errors } =useForm(
 submitForm,
    validate
);


  return (       
   
     <div className="form-content-right">
                                
        <form action="" className='form' onSubmit={handleSubmit}  noValidate>
         
           <div className="form-inputs"> <h3>Your Name</h3>
                <label htmlFor="username" className='form-label'> </label>
                     <input id='username' type="text" className='form-input' name='username'
                    placeholder='Enter Here' value={values.username}onChange={handleChange} />

                      {errors.username && <p>{errors.username}</p>}
           </div>

             <div className="form-inputs">
                <label htmlFor="email" className='form-label'> <h3>Your Email </h3>  </label>
                     <input id='email' type="email" className='form-input' name='email'
                      placeholder='Enter Here' value={values.email}onChange={handleChange}/>

                      {errors.email && <p>{errors.email}</p>}
                    </div>
                        <div className="form-inputs">
                <label htmlFor="password" className='form-label'> <h3> Password</h3>   </label>
                     <input id='password' type="password" className='form-input' name='password'
                     value={values.password}onChange={handleChange}   placeholder='Enter Here'/>

                      {errors.password && <p>{errors.password}</p>}
                    </div>
                       <div className="form-inputs">
                <label htmlFor="password2" className='form-label'>
              <h3>  Confirm Password  </h3>
                </label>
                     <input id='password2' type="password" className='form-input' name='password2'
                      value={values.password2}onChange={handleChange} />

                       {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                              <div className="form-inputs">
                <label htmlFor="visitback" className='form-label'>
            <h3>   Was the  information on the site was helpful? </h3>
                </label>
                     <input id='visitback' type="range" className='form-input' name='visitback'
                      value={values.visitback}onChange={handleChange} />
           </div>

           <div className='form-button'>
                    <button  type='submit'> Sign Up  </button>   
                      <Link to='/join-me'>             
                   <button onClick={refreshPage}> reset</button> 
                   </Link>
           </div>     

     
     <span className="form-input-login">
        <h4>        Already Signed up? You Can Login  <a href='/login'>Here </a></h4>
                 
     </span>

                  <div>
  <h2>{message}</h2>
  </div>
          </form>

 
    </div>   
    
                                                              
        )
}

export default FormSignup;
