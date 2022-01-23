import React from 'react'
import Head from './Head'
import {BsFillBookmarkFill} from "react-icons/bs"
import {Link} from 'react-router-dom'
import './formApply.css'
import './jobs.css'

export default function FormApply({handleChange,values,handleSubmit,errors, handleFile,jb}) {
    return (
       <>
                <Head/>
                <div className="relative">
                    <div className="overlay"></div>
                    <div className="jb-form-apply">
                                <Link to="/jobs">
                                <BsFillBookmarkFill size="5em" color="darkcyan"/>
                                <h3>{jb.title}</h3>
                                <p>{jb.location}</p>

                                </Link>
                                </div>

                <div className="contact-form">
                      
                       
                        
                         <div >
                                    <h3>Tes coordonnees</h3>
                                    <form className="l-form" onSubmit={handleSubmit}>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='name'
                                                        className='ctc-form-label-text'>
                                                            Name *:
                                            
                                                    </label>

                                         
                                                   

                                                </p>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    className="ctc-form-input"
                                                    placeholder="firstname"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    
        
                                                />
                                                    {errors.name && <p className="error">{errors.name}</p>}
                                    </div>
                                    <div className="form-inputs">
                                                <p>

                                                <label htmlFor='lastname'
                                                        className='ctc-form-label-text'>
                                                            Lastname *:
                                            
                                                    </label>
                                     
                                                </p>
                                                <input
                                                    id="lastname"
                                                    type="text"
                                                    name="lastname"
                                                    className="ctc-form-input"
                                                    placeholder="lastname"
                                                    value={values.lastname}
                                                    onChange={handleChange}
                                                    
        
                                                />

                                             {errors.lastname && <p className="error">{errors.lastname}</p>}
                                    </div>
                               
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='email'
                                                        className='ctc-form-label-text'>
                                                            Email *:
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    className="ctc-form-input"
                                                    placeholder="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    
        
                                                />
                                      {errors.email && <p className="error">{errors.email}</p>}
                                    </div>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='Phone'
                                                        className='ctc-form-label-text'>
                                                            Phone *:
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="tel"
                                                    type="text"
                                                    name="tel"
                                                    className="ctc-form-input"
                                                    placeholder="Phone"
                                                    value={values.tel}
                                                    onChange={handleChange}
                                                    
        
                                                />
                    
                                    </div>
                                    <h3>Documents</h3>
                                    <div className="form-inputs">
                                                <p>
                                                    <label htmlFor='Phone'
                                                        className='ctc-form-label-text'>
                                                            CV *:
                                            
                                                    </label>

                                            

                                                </p>

                                                
                                                <input
                                                    id="file"
                                                    type="file"
                                                    name="file"
                                                    className="ctc-form-input"
                                                    onChange={handleFile}
                                                    
                                                    
        
                                                />
                                                    {errors.file && <p className="error">{errors.file}</p>}
                    
                                    </div>
                                    
                                         <button  className="btn-contact" type="submit" >Submit</button>
                               

                                    </form>
                    </div>
                </div>
                </div>
              
        </>
    )
}
