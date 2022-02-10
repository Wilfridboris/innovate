import React,{useEffect,useState} from 'react'
import Head from './Head'
import './jobs.css'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { BsStopwatch,BsClipboard,BsGeoAlt} from "react-icons/bs";
import job from './jobs/job';
import getLocation from './functions/getLocation';

export default function JobDetails({match}) {
    const [jb,setJob]=useState({});
    const[error,setError]=useState(false);
    const [description,setDescription]=useState([]);
    const [responsability,setResponsability]=useState([]);
    const [profil,setProfil]=useState([]);
    const [skill,setSkill]=useState([]);
    const [geoInfo,setgeoInfo]=useState({})

       function  scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    function getJobDetail(){
        const {getJObDetails}=job(match.params.id);
        getJObDetails().then((res)=>{
         
            setJob(res[0]);
            setDescription(res[0].description.split("."));
            setResponsability(res[0].responsability.split("."));
            setProfil(res[0].profil.split("."));
            setSkill(res[0].skill.split("."));
          

        },(err)=>{
            console.log(err);
           setError(true);
           
        })
    }

    function getGeoInfos(){
        getLocation().then((res)=>{
            setgeoInfo(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(() => {
        getJobDetail();
        getGeoInfos();
        return () => {
            getJobDetail();
            getGeoInfos();
        }
    }, [])
    
    return (
        
       <>
       {
       error?
       
       (
       <div>No job found with this id sorry!</div>
       
       ):(
            <>
            <Head/>
            <Helmet>
                <title>legrowtech Jobs</title>
                <meta name="description" content="legrowtech help you find your next jobs, canada and cameroon jobs |" />
            </Helmet>
            <div className="relative">
            <div className="overlay"></div>
            <div className="l-container-jbd">
            <h2>{jb.title}</h2>
        
            <div className="l-container-flex-jbd">
                <div className="l-right-content-jbd">
              
                        {description.map(des=>{
                            return <p key={des.substring(0,1)}>{des}</p>
                        })}
                        <h2>Your responsibilities</h2>
                        {responsability.map(res=>{
                            return <p key={res.substring(0,2)}><span className="dot"></span> {res}</p>
                        })}

                        <h2>Ton Profil</h2>
                        {profil.map(pro=>{
                            return <p key={pro.substring(0,2)}><span className="dot"></span>{pro}</p>
                        })}
                        <p>
                        Notre objectif est de continuer à faire grandir cette communauté,
                        en phase avec nos valeurs : Humain, Proximité, Transparence,
                        Efficacité, et la rendre incontournable sur le marché Parisien du digital.

                        </p>
                        <h2>Skills</h2>
                        {skill.map(skl=>{
                            return <p key={skl.substring(0,2)}><span className="dot"></span>{skl}</p>
                        })}
                    
                        <div className="l-space-jbd"></div>
                    </div>
                    <div className="l-left-content-jbd">
                    <p>  <BsStopwatch/> {jb.start_data}</p>
                    <p>  <BsGeoAlt/> {jb.location}</p>
                    <p> <BsClipboard/> {jb.salary}</p>

               
                <Link to={"/apply/"+match.params.id}>
                    <button  className="btn-contact" onClick={scrollTop}>Apply</button>
                </Link>
                </div>
                
                
            </div>
            </div>
            </div>
            </>
        
       )}
       </>
    )
}
