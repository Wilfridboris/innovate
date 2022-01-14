import React from 'react'
import Head from './Head'
import './styles/services.css'
import ServiceHeader from './components/ServiceHeader'
import icon4 from './img/icons/icon_planet.png'
import icon5 from './img/icons/icon_cloud.png'
import icon6 from './img/icons/icon_it.png'
import Footer from './Footer'

export default function Service() {
    return (
        <>
              <Head/>
             <div className="relative">
                 <div className="overlay"></div>
                 <div >
                        <div className="services-banner">
                              <ServiceHeader
                              title="explore Our Services"
                              description="Team of experts just waiting to work for you"
                              />
                        </div>
                        <div className="services-first-section">
                              
                                <div className="services-first-section-items">
                                <div className="sfsi-image">
                                        <img src={icon4} alt="icon planet"></img>
                                </div>
                                    <h3>App Development </h3>
                                  
                                    <p className="legrowtech-description">Make you website flexible and robust</p>
                                </div>
                                <div className="services-first-section-items">
                                <div className="sfsi-image">
                                        <img src={icon5} alt="icon cloud"></img>
                                </div>
                                    <h3>Cloud Services </h3>
                                
                                    <p className="legrowtech-description">Make you website flexible and robust</p>
                                </div>
                                <div className="services-first-section-items">
                                <div className="sfsi-image">
                                        <img src={icon6} alt="icon IT"></img>
                                </div>
                                    <h3>IT Solutions </h3>
        
                                    <p className="legrowtech-description">Make you website flexible and robust</p>
                                </div>

                        </div>
                        <div className="services-second-section">
                        <ServiceHeader
                              title="Legrowtech"
                              description="what to expects"
                              />

                        <div>
                            <div className="services-second-section-flex">
                                
                                    <div className="ssecond-section-flex-item">
                                            <div className="ss-grid-items">
                                                <div className="ss-inline-item">
                                                    nike
                                                </div>
                                                <div className="ss-inline-item">
                                                    <h3> 10x</h3>
                                                    <p>faster web project devliveries</p>
                                                </div>
                                            </div>
                                            <div className="ss-grid-items">
                                                <div className="ss-inline-item">
                                                    cornestore
                                                </div>
                                                <div className="ss-inline-item">
                                                <h3> 90%</h3>
                                                    <p> better performance</p>
                                               
                                                </div>
                                            </div>
                                            <div className="ss-grid-items">
                                                <div className="ss-inline-item">
                                                    loblaws
                                                </div>
                                                <div className="ss-inline-item">
                                                <h3> 90%</h3>
                                                    <p> better performance</p>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="ssecond-section-flex-item">
                                        <div className="ss-flex-item-title">
                                                      <h3>Delivered at the Edge.Rooted in the Enterprise.</h3>  
                                                      <p>powers mission-critical web properties for major enterprises
                                                           like Nike, Citrix, RBI, Verizon, and Trinet. Our Enterprise offerings include:</p>

                                                     <ul>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                         <li>99.99% uptime SLA</li>
                                                     </ul>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>

                        </div>

              </div>
                 
             </div>
            <Footer/>
              </>
              
       
    )
}
