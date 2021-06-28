import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='successPic' src="/images/local_fruits.jpg" alt="success-image"/>
 
    </div>
  );
};

export default FormSuccess;