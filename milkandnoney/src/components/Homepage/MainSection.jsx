import React from 'react';
import '../../App.css'
import { Button } from '../Button/Button';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage =(()=> {
  return (
  
    <div className='main-container'> 
<div id='trail'> 
 <h2 className="headTextIndex"> Begin Your Journey into the History of the Israeli Cuisine....</h2>
</div> 
<div className='btn-continue-journey'>
  <a href='#movie'>
<Button 
className='btns' 
buttonStyle='btn--outline' 
buttonSize='btn--large'> Begin Here <i className='far fa-play-circle' />
</Button>
</a>
</div> 




<div className='head-text-div'>
  <div className='in-text'>
 <h3>The Forbidden Fruit</h3>
 </div>
   <div className='in-text'>
 <h3>Land of Milk and Honey</h3>
 </div>
  </div>
 <div className="forbidden-fruit"> 


 <img  className="forbidden-img" src="/images/apple.jpg" alt="Forbidden fruit" /> 
 
  <p className='par-text'>

וַיְצַו ה' אֱלֹהִים עַל-הָאָדָם לֵאמֹר מִכֹּל עֵץ-הַגָּן אָכֹל תֹּאכֵל. וּמֵעֵץ הַדַּעַת טוֹב וָרָע לֹא תֹאכַל מִמֶּנּוּ, כִּי בְּיוֹם אֲכָלְךָ מִמֶּנּוּ מוֹת  תמוּתָּ.
טוֹב הָעֵץ לְמַאֲכָל וְכִי תַאֲוָה הוּא לָעֵינַיִם וְנֶחְמָד הָעֵץ לְהַשְׂכִּיל</p>

 <img  className="forbidden-img" src="/images/milk_and_honey_400.jpg" alt="Forbidden fruit" /> 



  <p className='par-text'>טוֹבָה הָאָרֶץ מְאֹד מְאֹד: אִם חָפֵץ בָּנוּ ה' וְהֵבִיא אֹתָנוּ אֶל הָאָרֶץ הַזֹּאת וּנְתָנָהּ לָנוּ אֶרֶץ אֲשֶׁר הִוא זָבַת חָלָב וּדְבָשׁ</p>

</div>

<div className='top-main' >
  
      <video id='movie' src="/videos/Jerusalem_4000.mp4" autoPlay loop muted/>
      </div>



<div className='btn-continue-journey'>
   <Link to='/history-trail'>
      
<Button 
className='btns' 
buttonStyle='btn--outline' 
buttonSize='btn--large'> <h4>Nice start. Now let's continue..</h4>   
</Button>

</Link>

</div>


    </div>


  )
})

export default HomePage;


