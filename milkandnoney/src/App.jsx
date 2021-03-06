import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home'
import HistoryTrail from './components/pages/HistoryTrail';
import Recipes from './components/pages/Recipes';
import JoinMe from './components/pages/JoinMe';
import './App.css'
import Login from './components/pages/Login';
import About from './components/pages/About';

class App extends React.Component{
render() {
   
return (
<div>

  <Router>
    
    <Navbar/>
  <Switch>
<Route  path='/login' exact component={Login}/>
<Route path ='/history-trail' exact component={HistoryTrail}/>
<Route path='/recipes'exact component={Recipes}/>
<Route path='/join-me'exact component={JoinMe}/>
<Route path='/about'exact component={About}/>
<Route  path='/' exact component={Home}/>
</Switch>
</Router>

</div> 


)

} 

}

export default App;