import React, { useState,useEffect } from 'react'
import Head from './Head'
import { Helmet } from 'react-helmet';
import './jobs.css'
import {BsFillBookmarkFill} from "react-icons/bs"
import jobBanner from './img/banner-jobs.png'
import {Link} from 'react-router-dom'
import job from './jobs/job';

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
        <div>
            <Head/>
            <Helmet>
                <title>legrowtech Jobs</title>
                <meta name="description" content="legrowtech help you find your next jobs, canada and cameroon jobs" />
            </Helmet>
            <div className="legrowtech-container-jobs">
                <div className="l-banner-jb">
                    <img src={jobBanner} alt='legrowtech banner jobs' title="legrowtech banner jobs"></img>
                </div>
                <div className="l-content-jb">
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
    )
}
