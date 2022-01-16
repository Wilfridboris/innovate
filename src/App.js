import React from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Service from './Service'
import Contact from './Contact'
import Home from './Home'
import Solution from './Solution'
import Solution_web_application from './solution_web_application'
import Learn from './Learn'
import Learn_spa from './Learn_spa'
import useForm from './useForm'
import Jobs from './Jobs'
import JobDetails from './JobDetails'
import useFormApply from './useFormApply'
import Dashboard from './Dashboard'
import HttpsRedirect from 'react-https-redirect';

function App() {
  
  return (
    <HttpsRedirect>
        <Router>
        <main className="container">
        
            <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/login"  component={useForm}/>
                  <Route path="/dashboard"  component={Dashboard}/>
                  <Route path="/services" exact component={Service}/>
                  <Route path="/solutions" exact component={Solution}/>
                  <Route path="/jobs" exact component={Jobs}/>
                  <Route path="/contact-us" exact component={Contact}/>
                  <Route path="/jobs/:id" component={JobDetails}/>
                  <Route path="/apply/:id" component={useFormApply}/>
                  <Route  path="/learn" exact component={Learn}/>
                  <Route  path="/learn/spa"  component={Learn_spa}/>
                  <Route  path="/services/web" component={Solution_web_application}/>    
                
              
            
            </Switch>
            
            
          
        
        </main>
        </Router>

    </HttpsRedirect>
          
  );
}

export default App;
