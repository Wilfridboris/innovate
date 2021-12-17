import React from 'react';
import './signIn.css';
function FormSigIn({
    handleChange,
    values,
    handleSubmit,
    errors,
    loginError}) {
   

   
    
    return (
        <>
        <div className="login-form">
            <div className="login-header">
                <h2>Portail Legrowtech</h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
                    <p>
                        <label htmlFor='email'
                             className='form-label'>
                                Username:
                
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
                   
                        {errors.email && <p className="error">{errors.email}</p>}
                 
                  
            </div>
            <div className="form-inputs">
                <p>
                        <label htmlFor='password'
                        className='form-label'>
                            Password:
                        
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
            
                        {errors.password && <p className="error">{errors.password}</p>}
         
               <p></p>
            </div>
           
            <button className="form-input-btn"
                type="submit"
                >
                     Connexion
                </button>
                {loginError && <p className="error">{loginError}</p>}
            </form>

        </div>
        <div id="overlay"></div>
        </>
    )
}

export default FormSigIn
