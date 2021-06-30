import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>

<div className='form-button'>
        <Link to='/'>
          <button  type='submit'> Take Me Back Home  </button> 
        </Link>
    </div>
 
      <img className='successPic' src="/images/Food-israel.jpg" alt="success-image"/>


    </div>

    
  );
};

export default FormSuccess;