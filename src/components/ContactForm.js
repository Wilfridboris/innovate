import { Button } from 'bootstrap'
import React from 'react'

export default function ContactForm({
    handleChange,
    values,
    handleSubmit,
    errors,
    isLoading
}) {
   
 

    return (
        <div className="contact-section">
            
            <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Leave a Message</h3>
            <p>Please fill the Document</p>
            <div className="form-inputs">
                    <p className="ctc-form-label-text">
                        <label htmlFor='name'
                           >
                                Name *
                
                        </label>

                    </p>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="ctc-form-input"
                        value={values.name}
                        onChange={handleChange}
                        
                    
                    />
                                       {errors.name && <p className="error">{errors.name}</p>}   
                   
                        
                 
                  
            </div>
            <div className="form-inputs">
                    <p className="ctc-form-label-text">
                        <label htmlFor='nameOrg'
                           >
                                Name Organisation
                
                        </label>

                    </p>
                    <input
                        id="nameOrg"
                        type="text"
                        name="nameOrg"
                        className="ctc-form-input"
                        value={values.nameOrg}
                        onChange={handleChange}
                        
                    
                    />
                   
                        
                 
                  
            </div>
            <div className="form-inputs">
                    <p className="ctc-form-label-text">
                        <label htmlFor='emailg'
                           >
                                Email *
                
                        </label>

                    </p>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="ctc-form-input"
                        value={values.email}
                        onChange={handleChange}
                        
                    
                    />
                    {errors.email && <p className="error">{errors.email}</p>}   
                    
                
            </div>
            <div className="form-inputs">
                    <p className="ctc-form-label-text">
                        <label htmlFor='message'
                           >
                                Message *
                
                        </label>

                    </p>
                    <textarea rows="5"
                        id="message"
                        type="text"
                        name="message"
                        className="ctc-form-input"
                        value={values.message}
                        onChange={handleChange}
                        
                    
                    />
                   
                   {errors.message && <p className="error">{errors.message}</p>}     
                 
                  
            </div>
        
            
                
                <button key='btn'  onClick={e=> { if(isLoading) e.currentTarget.disabled=true}} type="submit" className={isLoading?"btn-contact disabled":"btn-contact"} >{isLoading?"Loading ...":"Submit"}</button>
            </form>
        </div>
    )
}
