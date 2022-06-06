import React,{useState,useEffect} from 'react'
import LHead from './Learn/LHead'
import ILearn from './Interfaces/ILearn'
import {ImNext2} from "react-icons/im"
import {ImPrevious2} from "react-icons/im"
import {BsPlayFill} from "react-icons/bs"
import queryString from 'query-string'
import {BiFullscreen} from "react-icons/bi"
export default function LearnDetails({match}) {
    const [sections, setSection] = useState([])
    const [clips, setClips] = useState([])
    const [currentTitle, setCurrentTitle] = useState({field:'',clip:''})
    const [clipsNotFiltered, setClipsNotFiltered] = useState([])
    const [currentVideo, setCurrentVideo] = useState(0)
    var value=queryString.parse(window.location.search);
    function videoPlayer(){
        var fullScreenBtn=document.getElementById('full-screen')
        var body = document.body;
        var video=document.querySelector('.video-fluid')
        var fill=document.getElementById('fill')
        var btn=document.getElementById('play-pause')
        var duration=document.getElementById('duration')
        var time=document.getElementById('time')
        var bar=document.querySelector('.video-progress-bar')
        var video_col=document.querySelector('.learning-video-materials')
        var list_col=document.querySelector('.learning-list-materials')
        var video_title=document.querySelector('.video-title')
        var video_controls=document.querySelector('.video-controls')
        var timeout;
        video.addEventListener('loadeddata', (e) => {
            if(video.readyState >= 3){
                console.log('loading')
            }
        });
        document.onmousemove = function(){
          clearTimeout(timeout);
          video.style.cursor='initial'
          video_title.style.display='block'
          video_controls.style.display='block'
          timeout = setTimeout(function(){
            video.style.cursor='none'
            video_title.style.display='none'
            video_controls.style.display='none'
            }, 5000);
        }

        btn.addEventListener('click',()=>{
            togglePlayPause(video)
        })
        video.addEventListener('click',()=>{
            togglePlayPause(video)
        })
        fullScreenBtn.addEventListener('click',()=>{
          
            checkAndChangeScreenClass(video)
          
            toggleFullScreen(body)
        })
        

        document.addEventListener('keydown',(e)=>{
            e = e || window.event;
            if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
                checkAndChangeScreenClass(video)
                toggleFullScreen(body)
            }
        })
        video.addEventListener('timeupdate',()=>{
            var position=video.currentTime/video.duration;
            fill.style.width=position*100 +'%';
            let minute=parseInt(video.duration/60)
            let second=parseInt(video.duration%60)
            let playedMinute=parseInt(video.currentTime/60)
            let playedSecond=parseInt(video.currentTime%60)
            duration.textContent=`${minute}:${second}`;
            time.textContent=`${playedMinute}:${playedSecond}`;
            
        })
        bar.addEventListener("mousedown",function(event){
            var col3=list_col.offsetWidth;
            var barsize=document.querySelector('.video-progress-bar');
            var clickPosition;
            var MusicPlayerCol=document.querySelector('.video-fluid').offsetWidth;
            //console.log(MusicPlayerCol)
            if(MusicPlayerCol>=409.8){
                clickPosition=event.clientX-col3-barsize.offsetLeft;
                
                
        
            }else{
                 
              
                 clickPosition=event.clientX-barsize.offsetLeft;
                 
            }
            
            
        
            video.currentTime=(clickPosition*video.duration)/bar.offsetWidth;
            fill.style.width=clickPosition+'px';
        
            
            
        },false);
        
   

    }
   
  
   
    function togglePlayPause(video){
          //video.src=`http://localhost:8080/v1/learning/clip/${videosrc[currentSong].Clip_OID}`
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    }
    function ifSongEnded(e){
        if(e.currentTarget.ended){
            next();
            
        }
    }
    function next(){
        
        let next=currentVideo+1
        if(next>=clipsNotFiltered.length-1){
            next=clipsNotFiltered.length-1
           
        }
        window.location=`/learn/${match.params.Field}/${clipsNotFiltered[next].Slug_Clip}`
    }
    function precedent(){
        let prev=currentVideo-1
        if(prev<=0){
            prev=0
        }
        window.location=`/learn/${match.params.Field}/${clipsNotFiltered[prev].Slug_Clip}`
    }
    function checkTheSelectedClip(clips){
       for(let i =0;i<=clips.length;i++){
        if(clips[i].Slug_Clip===match.params.Clip){
            //let value=clip.Clip_OID
            console.log(clips[i].Slug_Clip)
            setCurrentVideo(i)
            break;
            //return {value,currentPostion};
        }
       
       }
         
        
        
    }
    function checkAndChangeScreenClass(video){
        if( video.classList.contains('video-resposible')){
            video.classList.remove('video-resposible')
            video.classList.add('full-screen')
        }else{
            video.classList.remove('full-screen')
            video.classList.add('video-resposible')
            
        }
    }
    function cancelFullScreen() {
        var el = document;
        var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen||el.webkitExitFullscreen;
        if (requestMethod) { // cancel full screen.
            requestMethod.call(el);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
           //do something
        }
    }
 

    function requestFullScreen(el) {
        // Supports most browsers and their versions.
        var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

        if (requestMethod) { // Native full screen.
            requestMethod.call(el);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
           //do something
        }
        return false
    }

    function toggleFullScreen(el) {
        if (!el) {
            el = document.body; // Make the body go full screen.
        }
        var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

        if (isInFullScreen) {
            cancelFullScreen();
        } else {
            requestFullScreen(el);
        }
        return false;
    }
  
    function launchIntoFullscreen(element) {
        
        if (element.requestFullscreen) {
          element.requestFullscreen();
          
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else {
          element.classList.toggle('fullscreen');
        }
      }

      function exitFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    
    function startVideo(clips,video,currentVideo){
        video.src=`http://localhost:8080/v1/learning/clip/${clips[currentVideo].Clip_OID}`
    }
    function playVideo(video){
        video.play();
    }

    async function getCurrentTitle(){
        await setCurrentTitle({field:match.params.Field.replace(/-/g,' '),
                        clip:match.params.Clip.replace(/-/g,' ')
                        
        })
    }

     async function  getSections(){
        const {getSections}=ILearn()
         await getSections(match.params.Field)
        .then(sections=>{
            setSection(sections)
            
        }).catch(err=>{
            console.log(err)
        })
    }
    function groupBy(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

     async function getAllClips(){
        const {getAllClips}=ILearn()
       await getAllClips(match.params.Field)
        .then(async(clips)=>{
            setClipsNotFiltered(clips)
            var video=document.querySelector('.video-fluid')
            checkTheSelectedClip(clips)
            startVideo(clips,video,currentVideo)
            playVideo(video)
            var groubedBySec= await groupBy(clips, 'Sec_title')
            setClips(groubedBySec)
            
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(() => {
        getCurrentTitle();
        getAllClips();
        getSections();
        videoPlayer()
        
      
    }, [])
    useEffect(() => {
        getAllClips();

      
    }, [currentVideo])
    return (
        <>
            <LHead/>
            <div className="learning-container">
                    <div className="learning-list-materials">
                        <div className="learning-contents ">
                            <div >
                                {sections.map((section,index)=>{
                                        return (
                                            <ul className="learning-list-content" key={"ul-"+section.Sec_OID}>
                                                <li className="learning-content-title">{`${index}. ${section.Sec_title}`}</li>
                                                <ul className="learning-list-group">
                                                    {clips[''+section.Sec_title+''].map(clip=>{
                                                        return(
                                                            <li key={clip.Clip_OID}>
                                                               <a href={`/learn/${match.params.Field}/${clip.Slug_Clip}`}>{clip.Clip_title}</a>
                                                                </li>
                                                        )
                                                    })}
                                                </ul>
                                               
                                            </ul>
                                        )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="learning-video-materials">
                                    <div className="video-container">
                                        <div className="video-title">
                                                <div className="video-title-list">
                                                    <h3>{currentTitle.field}</h3>
                                                    <p>{currentTitle.clip}</p>
                                                </div>
                                                <div className="video-title-shared">
                                                       
                                                </div>
                                        </div>
                                    <video className="video-fluid z-depth-1 video-resposible" onTimeUpdate={ifSongEnded} >
                                            <source src="" type="video/mp4" />
                                    </video>
                                    <div className="video-controls">
                                            <div className="video-progress-bar">
                                                <div  id="fill"></div>
                                                <div id="handle"></div>
                                            </div>
                                            <div className="video-buttons">
                                                
                                                <button className="btn-video-control" onClick={precedent}>< ImPrevious2 size="2em" /></button>
                                                <button className="btn-video-control" id="play-pause">< BsPlayFill  size="2em" /></button>
                                                <button className="btn-video-control" onClick={next}>< ImNext2 size="2em" /></button>
                                                <button className="btn-video-control"><p id="time">00:00</p></button>
                                                <button className="btn-video-control"><p id="duration">00:00</p></button>
                                                <button className="btn-video-control float-end" id="full-screen"><BiFullscreen size="1.5em" /></button>
                              
                                                
                                            </div>
                                    </div>
                                </div>
                    </div>  
                
            </div>

        </>
    )
}
