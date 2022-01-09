import React from 'react'
import Head from './Head'
import './styles/services.css'
import ServiceHeader from './components/ServiceHeader'

export default function Service() {
    return (
        <div >
              <Head/>
              <div className="services">
                        <div className="services-banner">
                              <ServiceHeader
                              title="explore Our Services"
                              description="Team of experts just waiting to work for you"
                              />
                        </div>
                        {/* <div className="services-first-section">
                                <div className="services-first-section-items">
                                    <h3>Frontend / backend </h3>
                                    <div className="sfsi-image"></div>
                                    <p>Make you website flexible and robust</p>
                                </div>
                                <div className="services-first-section-items">
                                    <h3>Cloud </h3>
                                    <div className="sfsi-image"></div>
                                    <p>Make you website flexible and robust</p>
                                </div>
                                <div className="services-first-section-items">
                                    <h3>IT Solutions </h3>
                                    <div className="sfsi-image"></div>
                                    <p>Make you website flexible and robust</p>
                                </div>

                        </div> */}
                        <div className="services-second-section">


                        </div>

              </div>
              
        </div>
    )
}
