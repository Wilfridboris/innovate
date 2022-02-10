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
    const [contracts,setContract]=useState([]);
    const [professions,setprofession]=useState([])
    const [selectedCt,setSelectedCt]=useState("Contrat");
    const [selectedJt,setSelectedJt]=useState("Profession");
    const [filteredJobs,setFilteredJobs]=useState([]);

    const CtselectHandler=(e)=>{
        setSelectedCt(e.currentTarget.textContent)
    }
    const JtselectHandler=(e)=>{
        setSelectedJt(e.currentTarget.textContent)
    }
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
    function getContract(){
        const {getJobContracts}=job();
        getJobContracts().then((result)=>{
                setContract(result);
        },(err)=>{
            console.log(err);
        })
    }
    function getprofession(){
        const { getJobProfessions}=job();
        getJobProfessions().then((result)=>{
                setprofession(result);
        },(err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        getJobs();
        getContract();
        getprofession();
      
    }, [])
    useEffect(() => {
        const filterHandler=()=>{
            
            if(selectedCt==="Contrat" && selectedJt==="Profession"){
                setFilteredJobs(jobs)
            }else if(selectedCt==="Contrat" && selectedJt!=="Profession"){
                setFilteredJobs(jobs.filter(job=>(job.jt_title===selectedJt )))
                
            }else if(selectedCt!=="Contrat" && selectedJt==="Profession"){
                setFilteredJobs(jobs.filter(job=>(job.ct_title===selectedCt )));
            }
            
            else{
                setFilteredJobs(jobs.filter(job=>(job.ct_title===selectedCt && job.jt_title===selectedJt )));
            }
        }
        filterHandler()
     
    }, [jobs, selectedCt,selectedJt])
    return (
        <>
        
            <Head/>
            <Helmet>
                <title>legrowtech Jobs</title>
                <meta name="description" content=" At legrowtech, we recognize that our strength lies in the persons who drive our missions" />
            </Helmet>
                <div className="relative">
                    <div className="overlay"></div>
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
                    <h2>Our jobs </h2>
                    <div className="jbs-dropdown">
                      <div className="jbs-relative-groups">

                      <button className=" custom-select-input">Yaounde</button>
                        {/* <div className="jbs-dropdown-menu">
                            <button>Yaounde</button>
                      
                        </div> */}
                      </div>


                       <div className="jbs-relative-groups">
                       <button className="custom-select-input">{selectedCt}</button>
                        <div className="jbs-dropdown-menu">
                        <button onClick={CtselectHandler}>Contrat</button>
                        {contracts.map(contract=>{
                                return (
                                    <button key={"C"+contract.ct_id} onClick={CtselectHandler}>{contract.ct_title}</button>
                                )

                            })}
                        </div>

                       </div>
                      
                      <div className= "jbs-relative-groups">

                      <button className=" custom-select-input">{selectedJt}</button>
                        <div className="jbs-dropdown-menu ">
                            <button onClick={JtselectHandler}>Profession</button>
                            {professions.map(profession=>{
                                return (
                                    <button key={"P"+profession.jt_id} onClick={JtselectHandler}>{profession.jt_title}</button>
                                )

                            })}
                           
                          
                        </div>
                      </div>
                        
                    </div>
                    <div className="l-content-list-jb">
                        {
                            filteredJobs.length===0 && 
                        
                            <p>Desole! Nous avons trouver aucun job correspondant {selectedCt} | {selectedJt}</p>
                          
                            
                        }
                   
                        {filteredJobs.map(job=>{
                        
                        return(
                            
                                    <div key={"J"+job.id} className="jb-items">
                                      <Link to={"/jobs/"+job.id} onClick={scrollTop}>
                                      <BsFillBookmarkFill size="5em" color="darkcyan"/>
                                      <h3>{job.title}</h3>
                                      <p>{job.location}</p>

                                      </Link>
                                    </div>
                     
                            
                            
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
