import React from 'react';
import './signIn.css';
import logo from './img/apox.png'
import { Helmet } from 'react-helmet';
function FormSigIn({
    handleChange,
    values,
    handleSubmit,
    errors,
    loginError}) {
   

   
    
    return (
        <>
           <Helmet>
                <title>legrowtech Login</title>
                <meta name="description" content="Login to your Dashboard legrowtech" />
            </Helmet>
        <div className="login-form">
            <div className="login-header">
              <img src={logo} alt="logo"></img>
                <h3>Login to your dashboard</h3>
            </div>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
                    <p className="form-label-text">
                        <label htmlFor='email'
                           >
                                Email address
                
                        </label>

                    </p>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    />
                   
                        
                 
                  
            </div>
            <div className="form-inputs">
                <p className="form-label-text">
                        <label htmlFor='password'
                       >
                            Password
                        
                        </label>
                </p>
                <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your Password"
                        value={values.password}
                        onChange={handleChange}
                    />
            
                       
         
               <p></p>
            </div>
           
            <button className="form-input-btn"
                type="submit"
                >
                     Connexion
                </button>
                {loginError && <p className="error">{loginError}</p>}
                {errors.password && <p className="error">{errors.password}</p>}
                {errors.email && <p className="error">{errors.email}</p>}
            </form>

        </div>
       
        </>
    )
}

export default FormSigIn
