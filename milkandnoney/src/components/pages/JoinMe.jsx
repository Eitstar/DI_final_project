import React,{useState} from 'react'
import '../../App.css';
import Footer from '../Footer/Footer';
import JoinMeMain from '../JoinMe/JoinMeMain';

export const Appcontext =React.createContext(null)
function JoinMe() {
    const [message, setMessage] = useState('');
                    return (
                                        <div>
                                         <h1>Join Us Today!!!</h1> 
                                         <Appcontext.Provider value ={{message,setMessage}}>
                                     <JoinMeMain/>   
                                    <Footer/>  
                                </Appcontext.Provider>
                                        </div>
                    )
}

export default JoinMe

