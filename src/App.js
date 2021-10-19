import React,{useEffect} from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Service from './Service'
import Home from './Home'
import Solution from './Solution'
import Solution_web_application from './solution_web_application'
import Learn from './Learn'
import Learn_spa from './Learn_spa'
import useForm from './useForm'
import Jobs from './Jobs'
import JobDetails from './JobDetails'
import FormApply from './FormApply'

function App() {
  
  return (
    <Router>
    <main className="container">
    
        <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/login"  component={useForm}/>
              <Route path="/services" component={Service}/>
              <Route path="/solutions" exact component={Solution}/>
              <Route path="/jobs" exact component={Jobs}/>
              <Route path="/jobs/:id" component={JobDetails}/>
              <Route path="/apply" component={FormApply}/>
              <Route  path="/learn" exact component={Learn}/>
              <Route  path="/learn/spa"  component={Learn_spa}/>
              <Route  path="/solutions/web" component={Solution_web_application}/>
   
             
              
             
          
        
        </Switch>
        
         
       
     
    </main>
    </Router>
  );
}

export default App;
