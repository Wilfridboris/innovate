import { Button } from 'bootstrap'
import React from 'react'

export default function ContactForm() {
    return (
        <div className="contact-section">
            
            <form className="contact-form">
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
                        
                    
                    />
                   
                        
                 
                  
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
                        
                    
                    />
                    
                
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
                        
                    
                    />
                   
                        
                 
                  
            </div>

            

                <button type="submit" className="btn-contact">Submit</button>
            </form>
        </div>
    )
}
