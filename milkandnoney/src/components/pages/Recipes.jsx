import React from 'react'
import '../../App.css';
import Footer from '../Footer/Footer';
import ImageSlider from '../recipes/ImageSlider'
// import CardRecipes from '../recipes/CardRecipes';
function Recipes() {
                    return (
                                        <div>
                    {/* <CardRecipes/> */}
                    <ImageSlider/>
                    <Footer/>                   
                                        </div>
                    )
}

export default Recipes;