import React from 'react'
import Head from './Head'
import ServiceHeader from './components/ServiceHeader'

export default function Service() {
    return (
        <div className="legrowtech_services">
              <Head/>
              <div className="services">
                        <div className="services-banner">
                              <ServiceHeader
                              title="Explore Our Services"
                              description="Team of experts just waiting to work for you"
                              />
                        </div>
                        <div className="services-first-section">


                        </div>

              </div>
              
        </div>
    )
}
