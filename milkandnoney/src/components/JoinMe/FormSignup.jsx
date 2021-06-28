import React from 'react'
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
// import '../Button/Button.css'

const FormSignup=({ submitForm })=> {
                    const{handleChange, handleSubmit, values, errors } =useForm(
 submitForm,
    validate
);
  return (         
     <div className="form-content-right">
                                
        <form action="" className='form' onSubmit={handleSubmit}  noValidate>
         
           <div className="form-inputs"> <h4>Your Full Name</h4>
                <label htmlFor="username" className='form-label'> </label>
                     <input id='username' type="text" className='form-input' name='username'
                    placeholder='Enter Here' value={values.username}onChange={handleChange} />

                      {errors.username && <p>{errors.username}</p>}
           </div>

             <div className="form-inputs">
                <label htmlFor="email" className='form-label'> <h4>Your Full Email </h4>  </label>
                     <input id='email' type="email" className='form-input' name='email'
                      placeholder='Enter Here' value={values.email}onChange={handleChange}/>

                      {errors.email && <p>{errors.email}</p>}
                    </div>
                        <div className="form-inputs">
                <label htmlFor="password" className='form-label'> <h4> Password</h4>   </label>
                     <input id='password' type="password" className='form-input' name='password'
                     value={values.password}onChange={handleChange}   placeholder='Enter Here'/>

                      {errors.password && <p>{errors.password}</p>}
                    </div>
                       <div className="form-inputs">
                <label htmlFor="password2" className='form-label'>
              <h4>  Confirm Password  </h4>
                </label>
                     <input id='password2' type="password" className='form-input' name='password2'
                      value={values.password2}onChange={handleChange} />

                       {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                              <div className="form-inputs">
                <label htmlFor="visitback" className='form-label'>
            <h4>   Was the  information on the site was helpful? </h4>
                </label>
                     <input id='visitback' type="range" className='form-input' name='visitback'
                      value={values.visitback}onChange={handleChange} />
           </div>

           <div className='btn-1 '>
                        <button  type='submit'> Sign Up  </button>  
                  
                
                   <button  type='reset'>   reset</button> 
           </div>     

{/* <div className='btn-1 '>
          <a href="http://localhost:3000/">
       <span >Sign Up </span>   </a>  
           <a href="http://localhost:3000/join-me">
       <span >Reset</span>   </a>                        
</div> */}


           
     
     
     <span className="form-input-login">
                         Already Signed up? You Can Login  <a href='#'>Here </a>
     </span>
          </form>
    </div>                                                             
        )
}

export default FormSignup;
