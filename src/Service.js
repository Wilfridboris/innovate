import React from 'react'
import Head from './Head'
import './styles/services.css'
import ServiceHeader from './components/ServiceHeader'
import {AiOutlineCheckCircle} from "react-icons/ai";
import icon4 from './img/icons/icon_planet.png'
import icon5 from './img/icons/icon_cloud.png'
import icon6 from './img/icons/icon_it.png'
import map from './img/world_map.png'
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
                              title="Explore Our Services"
                              description="Team of experts just waiting to work for you"
                              size="large"
                              />
                        </div>
                        <div className="services-first-section">
                              
                                <div className="services-first-section-items">
                                <div className="sfsi-image">
                                        <img src={icon4} alt="icon planet"></img>
                                </div>
                                    <h3>App Development </h3>
                                  
                                    <p className="legrowtech-description"> Digital transformation to Enhances your brand exposure, client engagement, brand popularity and  buyer support </p>
                                </div>
                                <div className="services-first-section-items">
                                <div className="sfsi-image">
                                        <img src={icon5} alt="icon cloud"></img>
                                </div>
                                    <h3>Cloud Services </h3>
                                
                                    <p className="legrowtech-description"> Help you access the latest applications any time without spending your time and money on installations</p>
                                </div>
                                <div className="services-first-section-items">
                                <div className="sfsi-image">
                                        <img src={icon6} alt="icon IT"></img>
                                </div>
                                    <h3>IT Solutions </h3>
        
                                    <p className="legrowtech-description">We Provide hands-off IT management,endless cost-saving benefits, quick fix of  technical issues and outages for organization</p>
                                </div>

                        </div>
                        <div className="services-second-section">
                        <ServiceHeader
                              title="Legrowtech"
                              description="what to expects"
                              size="large"
                              />

                        <div>
                            <div className="services-second-section-flex">
                                
                                    <div className="ssecond-section-flex-item">
                                            <div className="ss-grid-items">
                                              
                                                <div className="ss-inline-item">
                                                    <h3> 10 x</h3>
                                                    <p className="legrowtech-description">Faster web project delivries</p>
                                                </div>
                                            </div>
                                            <div className="ss-grid-items">
                                              
                                                <div className="ss-inline-item">
                                                <h3> 90%</h3>
                                                    <p className="legrowtech-description"> better performance</p>
                                               
                                                </div>
                                            </div>
                                            <div className="ss-grid-items">
                                              
                                                <div className="ss-inline-item">
                                                <h3> 90%</h3>
                                                    <p className="legrowtech-description"> better performance</p>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="ssecond-section-flex-item">
                                        <div className="ss-flex-item-title">
                                                      <h3>Delivered at the Edge.Rooted in the Enterprise.</h3>  
                                                      <p className="legrowtech-description">powers mission-critical web properties for major enterprises
                                                           like Nike, Citrix, RBI, Verizon, and Trinet. Our Enterprise offerings include:</p>

                                                     <ul className="ss-list-items legrowtech-description ">
                                                         <li> <AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li> <AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li> <AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li> <AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li> <AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li> <AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li><AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                         <li><AiOutlineCheckCircle size="0.8em" color="green"/> 99.99% uptime SLA</li>
                                                     </ul>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>

                        </div>
                        <ServiceHeader
                              title="Community of expert all at Once  "
                              description="Team of experts from six continents"
                              size="small"
                              />
                        <div className="services-third-section">
                      
                              <div>
                                  <img src={map} alt="legrowtech worlmap"></img>
                              </div>
                        </div>

              </div>
                 
             </div>
            <Footer/>
              </>
              
       
    )
}
