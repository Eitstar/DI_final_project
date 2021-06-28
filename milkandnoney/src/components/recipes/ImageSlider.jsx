import React ,{useState}  from 'react';
import SliderData from './SliderData'
const ImageSlider=() =>{
                    return (
                                        <div>
                                          <>
{SliderData.map((slide ,index)=>{
return(
    <img src={slide.image } alt=" Food Images" />            
)
})}
                                          </>

                                        </div>
                    )
}

export default ImageSlider;
