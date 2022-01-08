import React, { useState,useEffect } from 'react'
import Head from './Head'
import { Helmet } from 'react-helmet';
import './jobs.css'
import {BsFillBookmarkFill} from "react-icons/bs"
import jobBanner from './img/banner-jobs.png'
import {Link} from 'react-router-dom'
import job from './jobs/job';
import Footer from './Footer';

export default function Jobs() {
    const [jobs,setJobs]=useState([]);
    function  scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function getJobs(){
        const {getAllJob}=job();
        getAllJob().then((result)=>{
                setJobs(result);
        },(err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        getJobs();
        return () => {
            getJobs();
        }
    }, [])
    return (
        <>
        <div>
            <Head/>
            <Helmet>
                <title>legrowtech Jobs</title>
                <meta name="description" content=" At legrowtech, we recognize that our strength lies in the persons who drive our missions" />
            </Helmet>
            <div className="legrowtech-container-jobs">
                <div className="l-banner-jb">
                    <img src={jobBanner} alt='legrowtech banner jobs' title="legrowtech banner jobs"></img>
                </div>
                <div className="l-content-jb">
                    <div className="l-content-why">
                            <div className="services-title-section">
                                <h2 className='legrowtech-title'>Why join Legrowtech?</h2>
                                <p className='legrowtech-description'>At legrowtech we have a great work culture , we support knowledge and expansion and appreciates hard work.</p>
                                <p className='legrowtech-description'>We surveyed engineers around the globe to better gauge the impact that working at Legrowtech has had on their lives. Here is what they had to say..</p>
                            </div>
                            <div className="jb-grid-items">
                                            <div className="jb-item">
                                                <h4 className='text-teal'>89%</h4>
                                                <p>of placed engineers report an improved quality of life</p>
                                            </div>
                                            
                                            <div className="jb-item">
                                                <h4 className='text-pink'>85%</h4>
                                                <p>report improved confidence in self and abilities</p>
                                            </div>
                           
                       
                                            <div className="jb-item">
                                                <h4 className='text-blue'>88%</h4>
                                                <p>of legrowtech join for career growth opportunities </p>
                                            </div>
                            </div>
                         
                           

                    </div>
                    <h2>Our Jobs</h2>
                    <div className="l-content-list-jb">
                      {jobs.map(job=>{
                          return(
                              <>
                                      <div key={job.id} className="jb-items">
                                        <Link to={"/jobs/"+job.id} onClick={scrollTop}>
                                        <BsFillBookmarkFill size="5em" color="darkcyan"/>
                                        <h3>{job.title}</h3>
                                        <p>{job.location}</p>

                                        </Link>
                        </div>
                              
                              </>
                          )
                      })}

                   
                    </div>
                </div>

            </div>

        </div>
        <Footer/>

        </>
    )
}
