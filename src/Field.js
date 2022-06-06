import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import ILearn from './Interfaces/ILearn'

export default function Field({match}) {
    var value=queryString.parse(window.location.search);
    function redirectToFirstClip(){
        const {getAllClips}=ILearn()
        getAllClips(match.params.Field)
        .then(clips=>{
              window.location=`/learn/${match.params.Field}/${clips[0].Slug_Clip}`
          
           
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
        redirectToFirstClip()
        
      
    }, [])
   
    return (
        <div></div>
    )
}
