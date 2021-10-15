import React,{useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Service from './Service'
import Home from './Home'
import Solution from './Solution'
import Solution_web_application from './solution_web_application'
import Learn from './Learn'
import Learn_spa from './Learn_spa'
import FormSigIn from './FormSigIn'

function App() {
  
  return (
    <Router>
    <main className="container">
    
        <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login" exact component={FormSigIn}/>
              <Route path="/services" component={Service}/>
              <Route path="/solutions" exact component={Solution}/>
              <Route  path="/learn" exact component={Learn}/>
              <Route  path="/learn/spa" exact component={Learn_spa}/>
              <Route  path="/solutions/web" component={Solution_web_application}/>
             
              
             
          
        
        </Switch>
        
         
       
     
    </main>
    </Router>
  );
}

export default App;
