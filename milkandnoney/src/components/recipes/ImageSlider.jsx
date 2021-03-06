import React ,{useState}  from 'react';
// import { from } from 'webpack-sources/lib/CompatSource';
import {SliderData} from './SliderData'
import{FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
 import './recipes.css'

const ImageSlider=({slides}) =>{
const [current,setCurrent] =useState(0)
const lenght =slides.lenght

const nextSlide = () =>{
     setCurrent (current=== lenght-1 ? 0 : current + 1)            
}


const prevSlide = () =>{
     setCurrent (current=== 0 ? lenght-1  : current - 1)            
}


if(!Array.isArray(slides) || slides.lenght <=0){
                    return null
}
                    return (
     
                 <div>      <h2>The best Israeli food has to offer</h2>        
      <section className='slider'>
            
       <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />                  
       <FaArrowAltCircleRight className='right-arrow ' onClick={nextSlide} />     
                   
{SliderData.map((slide ,index)=>{                   
return(
                    <div  className={index === current ?'slide active' : 'slide'}key={index}>
                           {index === current && <a href={slide.url}  className='url'> <h3 className='description'>{slide.description}</h3></a> }
                        {index === current &&  <img src={slide.image} alt="Food Images" className='image'/> }
                        <link rel="stylesheet" href="" />
                                    
                                     
                                           
                                     
                                          
                    </div>
                  

)
})}
   </section>  
   </div>                                     
                    )
}

export default ImageSlider;
