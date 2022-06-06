import React,{ useState,useEffect }  from 'react'
import './static/bootstrap.min.css'
import './styles/Learn.css'
import { Helmet } from 'react-helmet';
import LHead from './Learn/LHead';
import ILearn from './Interfaces/ILearn';
import { Button } from 'bootstrap';
const imgPath='http://localhost:8080/v1/learning/images/'
export default function Learn() {
    const [courses,setCourses]=useState([])
    function getCourses(){
        const {getCourses}=ILearn()
        getCourses().then((courses)=>{
            setCourses(courses);
        })
    .catch(err=>{
        console.log(err)
    })
    }
    function controlCarousel(){

        const buttons=document.querySelectorAll("[data-carousel-button]")
        const radios=document.querySelectorAll(".learning-manual-btn")
        const items=document.querySelectorAll('.learning-slide')
        const radio_inputs=document.querySelectorAll('.learning-radio-btn')
    
        radios.forEach((radio,i)=>{
            radio.addEventListener('click',()=>{
                items.forEach(item=>delete item.dataset.active)
                //radio_inputs.forEach(radio_input=> radio_inputs[i].checked=false)
                items[i].dataset.active=true
                
            })
        })
        buttons.forEach(button=>{
            button.addEventListener("click",()=>{
                const offset=button.dataset.carouselButton==="next"?1:-1
                const slides=button
                .closest("[data-carousel]")
                .querySelector("[data-slides]")
           

                const activeSlide=slides.querySelector("[data-active]")
               
                let newIndex=[...slides.children].indexOf(activeSlide)+offset
                if(newIndex<0) newIndex=slides.children.length-1
                if(newIndex>=slides.children.length) newIndex=0
                radio_inputs[newIndex].checked=true
                slides.children[newIndex].dataset.active=true
                delete activeSlide.dataset.active
            })
        })
    }
   
    useEffect(() => {
        controlCarousel();
        getCourses();
      
    }, [])
    return (
        <>
            <LHead/>
           <Helmet>
           <title>legrowtech Learning</title>
            <meta name="description" content=" Over millions of training and tutorials for you to sharp your skills" />

          </Helmet>
            <div className="container-fluid">
                <div className="row">
                    <div className="learning-banner">
                        <div className="learning-slider">
                            <div className="learning-slides" data-carousel>
                                        
                                            <input type="radio" name="radio-btn" id="radio4" className="learning-radio-btn" checked/>
                                            <input type="radio" name="radio-btn" id="radio5" className="learning-radio-btn"/>
                                            <input type="radio" name="radio-btn" id="radio6" className="learning-radio-btn"/>
                                        

                                            <div className="arrow-left-wrapper">
                                                <div id="learning-arrow-left" data-carousel-button="prev"></div>
                                            </div>
                                            <div className="arrow-right-wrapper">
                                                <div id="learning-arrow-right" data-carousel-button="next"></div>
                                             </div>
                                                <div data-slides>
                                                <div className="learning-slide l1" data-active>
                                            <div className="learning-item-text ">
                                            <h3>Franck</h3>
                                            <p>Sofware enginner
                                                </p>
                                            </div>
                                            <div className="learning-item-media">
                                            <h3>Mastering web dev</h3>
                                            <p>learn a path of 4 year in 1 month</p>
                                            </div>
                    
                                           
                                            
                                </div>
                                <div className="learning-slide l2">
                                            <div className="learning-item-text">
                                            <h3>boris</h3>
                                            <p>Network enginner
                                                </p>
                                            </div>
                                            <div className="learning-item-media">
                                            <h3>Mastering networking</h3>
                                           <p> learn a path of 4 year in 1 month</p>
                                            </div>
                                            
                                </div>
                                <div className="learning-slide l3">
                                        <div className="learning-item-text">
                                            <h3>Betrand</h3>
                                            <p>Game dev
                                                </p>
                                            </div>
                                            <div className="learning-item-media">
                                            <h3>Mastering anim and game dev</h3>
                                            <p> learn a path of 4 year in 1 month</p>
                                            </div>
                                        
                                            
                                </div>
                                                </div>
                                        <div className="learning-navigation-auto">
                                            <div className="learning-auto-btn1"></div>
                                            <div className="learning-auto-btn2"></div>
                                            <div className="learning-auto-btn3"></div>

                                        </div>
                                            <div className="learning-navigation-manual">
                                                <label for="radio4" className="learning-manual-btn"></label>
                                                <label for="radio5" className="learning-manual-btn"></label>
                                                <label for="radio6" className="learning-manual-btn"></label>
                                            </div>
                                          
                             
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container-sm">
            <div className="row">
                    <div className="col-sm-6">
                        <div className="learning-track">
                            Weekly goal
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <ul className="learning-progress-bar">
                            <li>In progress</li>
                            <li>Saved</li>
                            <li>From your Org</li>
                        </ul>
                        <ul className="learning-progress-all">
                            <li>item1</li>
                            <li>item2</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    
                </div>
                <div className="row">
                <h2>Top pick for you</h2>
                    <div className="col-sm-11 col-lg-12">
                   
                            <div className="body-carousel-learning">
                            <div className="carousel-list-courses">

                        <div className="learning-list-courses">
                        
                        { courses.map(course=>{
                            return (
                                        <div key={course.Field_OID + course.Ins_name} className="learning-item">
                                    
                                            <a href={`/learn/${course.Slug_Field}`}>
                                                <img src={imgPath+course.Field_Img} alt={course.Field_Img}></img>
                                                <h4> {course.Field_title}</h4>
                                                <p>by {course.Ins_name}</p>
                                            </a>
                                        </div>
                            )
                        })

                        }

                        </div>
                        {/**skills pannel begin */}
                        <div className='skill-container' >
                            <p>choose your skill</p>
                            <div className='skill-container-tilte'>
                                <div>
                                    <p>top skills to learn</p>
                                </div>
                                <div>
                                    <p>
                                        Manage skills
                                    </p>
                                </div>
                            </div>
                            <div className='skill-container-items'>
                                <div className='skill-item'>
                                    <p>CIsco</p>
                                    <span>Follow</span>
                                </div>
                                <div className='skill-item'>
                                    <p>CIsco</p>
                                    <span>Follow</span>
                                </div>
                                <div className='skill-item'>
                                    <p>CIsco</p>
                                    <span>Follow</span>
                                </div>
                                <div className='skill-item'>
                                    <p>CIsco</p>
                                    <span>Follow</span>
                                </div>
                                <div className='skill-item'>
                                    <p>CIsco</p>
                                    <span>Follow</span>
                                </div>
                                <div className='skill-item'>
                                    <p>CIsco</p>
                                    <span>Follow</span>
                                </div>
                            </div>
                        </div>
                        {/**skills pannel end */}
                       

                        
                        

                </div>
                            </div>
                    </div>
                </div>
       {/*          <div className="row">
                    <div className="col-sm-11 col-lg-12">
                            <div className="learning-list-skill">

                              
                            </div>
                    </div>
                </div> */}
            </div>

        
        
         </>
    )
}
