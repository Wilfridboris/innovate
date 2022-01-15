import React,{useEffect} from 'react'
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
    function servicestabSelection(){
        const tags=document.querySelectorAll('[data-tab-target]');
        const tabContents=document.querySelectorAll('[data-tab-content]');
        tags.forEach(tab=>{
          tab.addEventListener('click',()=>{
              console.log('git')
              const target=document.querySelector(tab.dataset.tabTarget)
              tabContents.forEach(tabContent=>{
                  tabContent.classList.remove('service-tab-active')
              })
              tags.forEach(tab=>{
                  tab.classList.remove('tbisactive')
              })
              tab.classList.add('tbisactive')
              target.classList.add('service-tab-active')
          })
      })
      }
      useEffect(() => {
        servicestabSelection();
          return () => {
            
          }
      }, [])
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
                              size="small"
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
                              size="small"
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

                        <div className="services-four-section">
                        <ServiceHeader 
                              title="The expertise you need "
                              description="Our network of technologies and tools"
                              size="small"
                              color="white"
                              />

                              <div className="services-table">
                                        <div>
                                        <ul className="service-tb-list-menu">
                                            <li  className="tbisactive" data-tab-target="#language">Languages</li>
                                            <li data-tab-target="#Frameworks">Frameworks</li>
                                            <li data-tab-target="#Databases">Databases</li>
                                            <li data-tab-target="#IT">IT</li>
                                            <li data-tab-target="#Cloud">Cloud</li>
                                            <li data-tab-target="#Others">Others</li>
                                          
                                        </ul>
                                    </div>
                                    <div id="language" data-tab-content className="services-tab-content service-tab-active">
                                        <ul className="service-tb-content-grid">
                                                <li>Python</li>
                                                <li>java</li>
                                            
                                                
                                        </ul>
                                        <ul className="service-tb-content-grid">

                                                <li>javascript</li>
                                                <li>TypeScript</li>
                                                
                                        </ul>
                                     
                                    </div>
                                    <div id="Frameworks" data-tab-content className="services-tab-content ">
                                        <ul className="service-tb-content-grid">
                                                <li>React</li>
                                                <li>Angular</li>
                                            
                                                
                                        </ul>
                                        <ul className="service-tb-content-grid">

                                                <li>Django</li>
                                                <li>Flutter</li>
                                                
                                        </ul>
                                          <ul className="service-tb-content-grid">

                                                <li>vue</li>
                                                
                                                
                                        </ul>
                                     
                                    </div>

                                    <div id="Databases" data-tab-content className="services-tab-content ">
                                        <ul className="service-tb-content-grid">
                                                <li>Mysql</li>
                                                <li>MongoDb</li>
                                            
                                                
                                        </ul>
                                        <ul className="service-tb-content-grid">

                                                <li>PostgreSql</li>
                                                <li>Kafga</li>
                                                
                                        </ul>
                                       
                                     
                                    </div>
                                    <div id="IT" data-tab-content className="services-tab-content ">
                                        <ul className="service-tb-content-grid">
                                                <li>Cisco</li>
                                                <li>Mac</li>
                                            
                                                
                                        </ul>
                                        <ul className="service-tb-content-grid">

                                                <li>Window</li>
                                                <li>Linux</li>
                                                
                                        </ul>
                                      
                                       
                                     
                                    </div>
                                    <div id="Cloud" data-tab-content className="services-tab-content ">
                                        <ul className="service-tb-content-grid">
                                                <li>Azure</li>
                                                <li>Aws</li>
                                            
                                                
                                        </ul>
                                        <ul className="service-tb-content-grid">

                                                <li>Google</li>
                                                
                                                
                                        </ul>
                                       
                                     
                                    </div>
                                    <div id="Others" data-tab-content className="services-tab-content ">
                                        <ul className="service-tb-content-grid">
                                                <li>Premiere pro </li>
                                                <li> After effect</li>
                                            
                                                
                                        </ul>
                                        <ul className="service-tb-content-grid">

                                                <li> Photoshop</li>
                                                <li> Unity</li>
                                                
                                                
                                        </ul>
                                       
                                     
                                    </div>
                              </div>

                        </div>

              </div>
                 
             </div>
            <Footer/>
              </>
              
       
    )
}
