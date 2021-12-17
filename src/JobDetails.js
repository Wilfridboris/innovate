import React,{useEffect,useState} from 'react'
import Head from './Head'
import './jobs.css'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { BsStopwatch,BsClipboard,BsGeoAlt} from "react-icons/bs";
import job from './jobs/job';

export default function JobDetails({match}) {
    const [jb,setJob]=useState({});
    const[error,setError]=useState(false);

       function  scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function getJobDetail(){
        const {getJObDetails}=job(match.params.id);
        getJObDetails().then((res)=>{
         
            setJob(res[0]);
          

        },(err)=>{
            console.log(err);
           setError(true);
           
        })
    }
    useEffect(() => {
        getJobDetail();
        return () => {
            getJobDetail();
        }
    }, [])
    
    return (
        
       <>
       {
       error?
       
       (
       <div>No job found sorry</div>
       
       ):(
            <div>
            <Head/>
            <Helmet>
                <title>legrowtech Jobs</title>
                <meta name="description" content="legrowtech help you find your next jobs, canada and cameroon jobs |" />
            </Helmet>
           <div className="l-container-jbd">
           <p>Jobs</p>
            <h1>{jb.title}</h1>
        
            <div className="l-container-flex-jbd">
                <div className="l-right-content-jbd">
               
                        <p>{jb.description}</p>
                        <h2>Your responsibilities</h2>
                        <p>{jb.responsability}</p>

                        <h2>Ton Profil</h2>
                        <p>
                            
                        {jb.profil}

                        </p>
                        <p>
                        Notre objectif est de continuer à faire grandir cette communauté,
                        en phase avec nos valeurs : Humain, Proximité, Transparence,
                        Efficacité, et la rendre incontournable sur le marché Parisien du digital.

                        </p>
                        <h2>Skills</h2>
                        <p>{jb.skill}</p>
                    
                        <div className="l-space-jbd"></div>
                    </div>
                    <div className="l-left-content-jbd">
                    <p>  <BsStopwatch/> {jb.start_data}</p>
                    <p>  <BsGeoAlt/> {jb.location}</p>
                    <p> <BsClipboard/> {jb.salary}</p>

               
                <Link to="/apply">
                    <button  className="l-btn" onClick={scrollTop}>Apply</button>
                </Link>
                </div>
                
                
            </div>
            </div>
        </div>
       )}
       </>
    )
}
