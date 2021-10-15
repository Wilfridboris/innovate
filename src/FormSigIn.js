import React from 'react'
import './signIn.css'
import useForm from './useForm'
import validator from './Validator';
function FormSigIn() {
    const {handleChange,values,handleSubmit,errors}=useForm(validator);
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
         
               
            </div>
            <p></p>
            <button className="form-input-btn"
                type="submit"
                >
                     Connexion
                </button>
            </form>

        </div>
        <div id="overlay"></div>
        </>
    )
}

export default FormSigIn
