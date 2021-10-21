import {React} from 'react'
import Head from './Head'
import './jobs.css'
import {Link} from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { BsCaretRightFill ,BsStopwatch,BsClipboard,BsGeoAlt} from "react-icons/bs";

export default function JobDetails({match}) {
       function  scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    return (
        
        <div>
            <Head/>
            <Helmet>
                <title>legrowtech Jobs | {match.params.id} </title>
                <meta name="description" content="legrowtech help you find your next jobs, canada and cameroon jobs |" />
            </Helmet>
           <div className="l-container-jbd">
           <p>Jobs</p>
            <h1>{match.params.id}</h1>
        
            <div className="l-container-flex-jbd">
                <div className="l-right-content-jbd">
                    <p>
                    Legrowtech se compose de 8 communautés d’expertises, dont la Communauté Performance Digitale où se mutualisent diverses expertises 
                    (SEO, E-merch & Webanalyse) dans le but de répondre aux enjeux de performance financière
                     de nos clients.
                    </p>
                    <p>
                    Notre objectif est de continuer à faire grandir cette communauté,
                     en phase avec nos valeurs : Humain, Proximité, Transparence,
                      Efficacité, et la rendre incontournable sur le marché Parisien du digital.

                    </p>
                    <p>Pour cela, nous recherchons NOTRE perle rare à savoir un(e) E-Conversion Manager Confirmé(e) ! </p>
                    <p>
                    Directement intégré(e) au sein d’une Business Unit dynamique et en pleine expansion, ta mission principale sera d’apporter une réponse sur les différents
                     leviers de la performance digitale dans l’objectif d’améliorer le taux d’E-conversion de nos clients.
                    </p>
                    <h2>Your responsibilities</h2>
                    <p><BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <p> <BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <p> <BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <p> <BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <h2>Ton Profil</h2>
                    <p>
                    Notre objectif est de continuer à faire grandir cette communauté,
                     en phase avec nos valeurs : Humain, Proximité, Transparence,
                      Efficacité, et la rendre incontournable sur le marché Parisien du digital.

                    </p>
                    <p>
                    Notre objectif est de continuer à faire grandir cette communauté,
                     en phase avec nos valeurs : Humain, Proximité, Transparence,
                      Efficacité, et la rendre incontournable sur le marché Parisien du digital.

                    </p>
                    <h2>Skills</h2>
                    <p><BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <p><BsCaretRightFill size="0.8em"/>   Déployer et suivre une stratégie d’AB Tests</p>
                    <p><BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <p><BsCaretRightFill size="0.8em"/>  Déployer et suivre une stratégie d’AB Tests</p>
                    <div className="l-space-jbd"></div>
                </div>
                <div className="l-left-content-jbd">
                <p>  <BsStopwatch/> Des que possible</p>
                <p>  <BsGeoAlt/> Yaounde</p>
                <p> <BsClipboard/> Salary</p>
                <Link to="/apply">
                    <button  className="l-btn" onClick={scrollTop}>Apply</button>
                </Link>
                </div>
                
                
            </div>
            </div>
        </div>
    )
}
