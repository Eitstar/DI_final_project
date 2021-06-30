import React, { useState , message} from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const JoinMeMain = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    


   <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='/images/glimpse.jpg' alt='' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) :       <div>
  <h1>{message}</h1>
  </div> (
          <FormSuccess />

        )}
      </div>
    </>
  );
};

export default JoinMeMain;