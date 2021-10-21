import React from 'react'
import Head from './Head'
import { Helmet } from 'react-helmet';
import './jobs.css'
import {BsFillBookmarkFill} from "react-icons/bs"
import jobs from './img/banner-jobs.png'
import {Link} from 'react-router-dom'
export default function Jobs() {
    function  scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div>
            <Head/>
            <Helmet>
                <title>legrowtech Jobs</title>
                <meta name="description" content="legrowtech help you find your next jobs, canada and cameroon jobs" />
            </Helmet>
            <div className="legrowtech-container-jobs">
                <div className="l-banner-jb">
                    <img src={jobs} alt='legrowtech banner jobs' title="legrowtech banner jobs"></img>
                </div>
                <div className="l-content-jb">
                    <h2>Our Jobs</h2>
                    <div className="l-content-list-jb">
                        <div className="jb-items">
                          <Link to="/jobs/charge-de-communication" onClick={scrollTop}>
                          <BsFillBookmarkFill size="5em" color="darkcyan"/>
                           <h3>Charge de communication</h3>
                           <p>yaounde</p>

                          </Link>
                        </div>

                        <div className="jb-items">
                          <Link to="/jobs/web-developer" onClick={scrollTop}>
                          <BsFillBookmarkFill size="5em" color="darkcyan"/>
                           <h3>Web Developer</h3>
                           <p>yaounde</p>

                          </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
