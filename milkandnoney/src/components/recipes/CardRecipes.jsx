import React from 'react';
import MainRecipes from './MainRecipes';
 import '../../App.css';

function CardRecipes() {
   return (
               <div className='cards'>
                                         <h2>Here are some of the moust know Recipes</h2> 
                    <div className="cards__container"> 
                           <div className="cards__wrapper">
                                 <ul className="cards__items">
                                        <MainRecipes
                                        src="images/recipes-img/Burekas.jpg"
                                        text="Burekas is a popular baked pastry in Israeli cuisine."
                                        label='Israeli Baking'
                                        id='carousel'
                                        path='/join-me'
                                        />                                                                                                                 
                                 </ul> 
                          </div>     
                    </div>                
              </div>
         )
}

export default CardRecipes;
