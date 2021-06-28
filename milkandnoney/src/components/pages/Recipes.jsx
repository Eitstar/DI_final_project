import React from 'react'
import '../../App.css';
import Footer from '../Footer/Footer';
import ImageSlider from '../recipes/ImageSlider'
import {SliderData} from '../recipes/SliderData'

// import CardRecipes from '../recipes/CardRecipes';
function Recipes() {
                    return (
                                        <div>
                    {/* <CardRecipes/> */}
                    <ImageSlider slides={SliderData}/>
                    
                    <Footer/>                   
                                        </div>
                    )
}

export default Recipes;