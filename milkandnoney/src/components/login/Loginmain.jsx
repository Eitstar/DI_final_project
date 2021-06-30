import React from 'react'
import useForm from '../JoinMe/useForm';
import './login.css'

const Loginmain =() =>{
// const Loginmain=({ submitForm,validate })=> {
//                     const{handleChange, handleSubmit, values, errors } =useForm(
//  submitForm,
//      validate
// );
  return (  

     <div>

                                         <h2>Welcome Back! </h2>  
                                         <h3> Please Fill out The Following  </h3>    

    
   
     <div className="login-form-back">
                                
        <form action="" className='login-form'>
         
           <div className="login-form-inputs"> <h3> username  </h3>
                <label htmlFor="username" className='login-form-label'> </label>
                     <input id='username' type="text" className='login-form-input' name='username'
                    placeholder='Enter Here'  />

                      {/* {errors.username && <p>{errors.username}</p>} */}
           </div>
                        <div className="login-form-inputs">
                <label htmlFor="password" className='login-form-label'> <h3> Password</h3>   </label>
                     <input id='password' type="password" className='login-form-input' name='password'
                      placeholder='Enter Here'/>

                      {/* {errors.password && <p>{errors.password}</p>} */}
                    </div>


           <div className='login-form-button'>
                    <button  type='submit'> Log in   </button>  
            
           </div>     


          </form>
    </div>  
                  </div>                                                   
        )
}

export default Loginmain;



//  <div className="login-form-back">
                                
//         <form action="" className='login-form' onSubmit={handleSubmit}  noValidate>
         
//            <div className="login-form-inputs"> <h3> username  </h3>
//                 <label htmlFor="username" className='login-form-label'> </label>
//                      <input id='username' type="text" className='login-form-input' name='username'
//                     placeholder='Enter Here' value={values.username}onChange={handleChange} />

//                       {errors.username && <p>{errors.username}</p>}
//            </div>
//                         <div className="login-form-inputs">
//                 <label htmlFor="password" className='login-form-label'> <h3> Password</h3>   </label>
//                      <input id='password' type="password" className='login-form-input' name='password'
//                      value={values.password}onChange={handleChange}   placeholder='Enter Here'/>

//                       {errors.password && <p>{errors.password}</p>}
//                     </div>
