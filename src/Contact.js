import React from 'react'
import ServiceHeader from './components/ServiceHeader'
import Head from './Head'
import './styles/contact.css'

export default function Contact() {
    return (
        <div>
            <Head/>
          <div className="relative">
              <div className="overlay"></div>
              <ServiceHeader
                    title="Schedule a Call or Text Us"
                    description="Want to chat with us?We'd love to hear from you"
                    size="small"
                    />

                <div className="contact-contains">
                    <div className="contact-fist-section">
                        <a href="#">
                        <div className="contact-fist-section-item line-blue">
                          
                        
                         
                          <h3>Personal</h3>
                           <p className="legrowtech-description">Are you unetested in our latest news or working</p>
                         
                          
                       </div>
                        </a>

                      <a href="#">
                      <div className="contact-fist-section-item line-green">
                
                      
                            
                        <h3>Organisation</h3>
                        <p className="legrowtech-description">Are you unetested in our latest news or working</p>
            
             
                         </div>
                      </a>
                    </div>
                </div>
          </div>
        </div>
    )
}
