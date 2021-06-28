import React from 'react'
import timelineElements from './TimelineElements'
import { 
        VerticalTimeline , VerticalTimelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
// import { element } from 'prop-types'
import  './Trail.css'


const HistoryTrail =()=>{


return (


                    <div>

                            
                            <div id='trail'>
                        <h2>The Cuisine Timeline </h2>              
                            </div>
                            <div>
    {/* <iframe title ='song trail'  src="https://open.spotify.com/embed/track/19N0Zo0QNyhMyQ41c9B62V?theme=0" width="20%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" className='spotify'></iframe> */}

                            </div>
         
            <div className='map-style'>
         <VerticalTimeline>

                {
                  timelineElements.map(element=>{

                       return(
                            
                               <VerticalTimelineElement
                               key={element.key}
                               date={element.period}
                                dateClassName='date' >
                                <h3 className="vertical-timeline-element-title">
                                  {element.title}     
                                </h3>
                               
<p className='vertical-timeline-element-subtitle'>
 {element.description}       
</p>
              <img src={element.image}alt="" /> 
<div className='btn-1 '>
          <a href="http://localhost:3000/recipes">
       <span >Click for Recipes</span>        </a>             
</div>
                                                            
     
                               </VerticalTimelineElement>
                       ) 

                  })  
                } 
             
         </VerticalTimeline>
            </div> 
                   </div>
        )


}



export default HistoryTrail