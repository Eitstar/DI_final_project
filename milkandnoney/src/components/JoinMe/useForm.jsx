
import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Appcontext } from '../pages/JoinMe';
import axios from 'axios'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''

  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
const {message,setMessage}= useContext(Appcontext);
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
// console.log(values);
  const handleSubmit = e => {
    e.preventDefault();
  addUser()
    // setErrors(validate(values));
  };

const addUser = async ()=>{

  try{ 
    const fetch= await axios.post('http://localhost:5000/api/users/', values)
      console.log(fetch);
if (fetch.data.msg){
  setIsSubmitting(false)
  setMessage(fetch.data.msg)
}else {
  console.log("inside");
  setIsSubmitting(true)
  setMessage(null)
   setErrors(validate(values));
}


  }
catch(err) {
  console.log(err);
}
}

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
}

export default useForm;