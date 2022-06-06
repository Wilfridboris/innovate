import React from 'react'
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Service from './Service'
import useContact from './useContact'
import Home from './Home'
import Solution from './Solution'
import Learn from './Learn'
import useForm from './useForm'
import Jobs from './Jobs'
import JobDetails from './JobDetails'
import useFormApply from './useFormApply'
import Dashboard from './Dashboard'
import HttpsRedirect from 'react-https-redirect';
import LearnDetails from './LearnDetails'
import Field from './Field'
function App() {
  
  return (
    <HttpsRedirect>
      
        <Router>
        <main >
        
            <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/login"  component={useForm}/>
                  <Route path="/dashboard"  component={Dashboard}/>
                  <Route path="/services" exact component={Service}/>
                  <Route path="/solutions" exact component={Solution}/>
                  <Route path="/jobs" exact component={Jobs}/>
                  <Route path="/contact-us" exact component={useContact}/>
                  <Route path="/jobs/:id" component={JobDetails}/>
                  <Route path="/apply/:id" component={useFormApply}/>
                  {/* <Route  path="/learn" exact component={Learn}/>
                  <Route  path="/learn/:Field" exact  component={Field}/>
                  <Route  path="/learn/:Field/:Clip" exact  component={LearnDetails}/> */}
               
                
              
            
            </Switch>
            
            
          
        
        </main>
        </Router>

    </HttpsRedirect>
          
  );
}

export default App;
