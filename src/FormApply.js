import React from 'react'
import Head from './Head'
import {BsFillBookmarkFill} from "react-icons/bs"
import {Link} from 'react-router-dom'
import './formApply.css'
import './jobs.css'

export default function FormApply({handleChange,values,handleSubmit,errors}) {
    return (
        <div>
                <Head/>
                <div className="l-form-container">
                        <div className="l-form-left-content">
                                <div className="jb-items">
                                <Link to="/jobs/charge-de-communication">
                                <BsFillBookmarkFill size="5em" color="darkcyan"/>
                                <h3>Charge de communication</h3>
                                <p>yaounde</p>

                                </Link>
                                </div>
                         </div>
                         <div className="l-form-right-content">
                                    <h3>Tes coordonnees</h3>
                                    <form className="l-form" onSubmit={handleSubmit}>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='name'
                                                        className='l-form-label'>
                                                            name *:
                                            
                                                    </label>

                                         
                                                   

                                                </p>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    className="l-form-input"
                                                    placeholder="firstname"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    
        
                                                />
                                    </div>
                                    <div className="form-inputs">
                                                <p>

                                                <label htmlFor='lastname'
                                                        className='l-form-label'>
                                                            lastname *:
                                            
                                                    </label>
                                     
                                                </p>
                                                <input
                                                    id="lastname"
                                                    type="text"
                                                    name="lastname"
                                                    className="l-form-input"
                                                    placeholder="lastname"
                                                    value={values.lastname}
                                                    onChange={handleChange}
                                                    
        
                                                />

                                             {errors.lastname && <p>{errors.lastname}</p>}
                                    </div>
                               
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='email'
                                                        className='l-form-label'>
                                                            Email *:
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    className="l-form-input"
                                                    placeholder="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    
        
                                                />
                                      {errors.email && <p>{errors.email}</p>}
                                    </div>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='Phone'
                                                        className='l-form-label'>
                                                            Phone *:
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="phone"
                                                    type="text"
                                                    name="phone"
                                                    className="l-form-input"
                                                    placeholder="Phone"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    
        
                                                />
                    
                                    </div>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='motivation'
                                                        className='l-form-label'>
                                                            Dis-nous en plus sur ta motivation à rejoindre Legrowtech *
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="motivation"
                                                    type="text"
                                                    name="motivation"
                                                    className="l-form-input"
                                                    value={values.motivation}
                                                    onChange={handleChange}
                                                    
        
                                                />
                    
                                    </div>
                                    <h3>Documents</h3>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='Phone'
                                                        className='l-form-label'>
                                                            CV *:
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="file"
                                                    type="file"
                                                    name="file"
                                                    className="l-form-input"
                                                    value={values.file}
                                                    onChange={handleChange}
                                                    
                                                    
        
                                                />
                    
                                    </div>
                                    
                                         <button  className="l-btn" type="submit" >Submit</button>
                               

                                    </form>
                    </div>
                </div>
        </div>
    )
}
