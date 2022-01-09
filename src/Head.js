import React,{Component} from 'react'
import './head.css'
import {BsGridFill ,BsGrid} from "react-icons/bs";
import $ from 'jquery';
import Item from './Item'
import Subitem from './Subitem'
import logo from './img/logo.png'
import {Link} from 'react-router-dom'


export default class Head extends Component {
    constructor(props){
        super(props)
        this.state={
            iconIsToggle:false,
            isScroll:false

        }

    this.setToggleness=this.setToggleness.bind(this);
    this.reloadpage=this.reloadpage.bind(this);
    this.scrollTop=this.scrollTop.bind(this)
    this.toggleScrollBar=this.toggleScrollBar.bind(this)
    
    }


   
    
    toggleScrollBar(){
            const tags=document.querySelectorAll('.Products')
            const items=document.querySelectorAll('.item')
            const itemstoArray=[...items]
            const itemSlice=itemstoArray.slice(4,itemstoArray.length)
            const overlay=document.querySelector('.overlay')
            const ftags=[...tags,...itemSlice]
            ftags.forEach(tag=>{
                tag.addEventListener('mouseover',()=>{
                    document.body.style.overflow = 'hidden';
                    //overlay.classList.add('x-active')
                })
                tag.addEventListener('mouseout',()=>{
                    document.body.style.overflow = 'visible';
                    //overlay.classList.remove('x-active')
                })
            })

      
          
   
         
      
    }
    toggleItemStyle=()=>{
        const menu1=$('.header-item')
        const menu2=$('.header-option')
        $('.heard-bar').on('click',()=>{
            if(menu1.hasClass('select')){
                menu1.removeClass('select')
                menu2.removeClass('select')
    
            }else{
                menu1.addClass('select')
                menu2.addClass('select')

            }
        })
    }


    setToggleness=()=>{

        var header=document.documentElement.scrollTop||document.body.scrollTop
        var headerHeight=document.querySelector('header').offsetHeight
        const head=document.querySelector('header')

        if(header>headerHeight){    
            head.classList.add('fixed')
            if(header>headerHeight+50){
                head.classList.add('in-view')
            }else{
                head.classList.remove('in-view')
            }
            
        }else{
            head.classList.remove('fixed')
        }
        console.log("header top"+header)
        console.log("header height"+headerHeight)
      
    //    if(window.pageYOffset>200) {
    //       this.setState({isScroll:true})
        
    //    }
    //    else{
    //     this.setState({isScroll:false})
  
    //    }

       
    }
    reloadpage(){
        setTimeout(()=>{
            window.location.reload()
        },0)
      
    }
    scrollTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    componentDidMount(){
        this.toggleItemStyle()
    
       // this.setToggleness();
        this.toggleScrollBar()
        window.addEventListener('scroll',()=>this.setToggleness());

      }
    componentWillUnmount(){
         window.removeEventListener('scroll',()=>this.setToggleness());


    }
 
    render() {
    
            
            //className={this.state.isScroll?"fixed":""}
        return(
            <>
            <header >
            <div >
            <ul className="header-option">
                    <li className="logo"><a href="/"><img src={logo} alt="logo" width='100px'/></a> </li>
                    <li className="heard-bar" onClick={()=>{this.setState({iconIsToggle:!this.state.iconIsToggle})}}> {this.state.iconIsToggle?<BsGridFill size="1.6em" color="white"/>:<BsGrid size="1.6em" color="white"/>} </li>
                    <Item>Contact us
                        <ul className="submenu">
                            <Subitem>Contact Form</Subitem>
                            <Subitem>Director</Subitem>
                        </ul>
                    </Item>
                    <Item>Support
                            <ul className="submenu">
                                <Subitem>Technical support 647 </Subitem>
                                <Subitem>Customer service 402</Subitem>
                            </ul>
                    </Item>
                    <Item>English
                        <ul className="submenu">
                        <Subitem>French</Subitem>
                        <Subitem>English</Subitem>
                        </ul>
                    </Item>
                    <Item>My Account
                        <div className="account">
                            <li> Dashboard </li>
                            <li> <a href="https://legrowtech.com/login">Portail</a> </li>
                        </div>
                        <ul className="submenu">
                        <Subitem link="/dashboard"> Dashboard </Subitem>
                       <Subitem ><Link className="link" to="/login" >Portail</Link></Subitem>
                        </ul>
                    </Item>
                   
                  
                   
            </ul>

            </div>
            <div>
                <ul className="header-item">
                <Item >Services
                    
                    
                    
                    <div className="Products">
                    <section className="Product-section">
                        <h2><a href="">Sofware integration</a></h2>
                        <p>We help you integrate and deploy a wide range of application</p>
                    </section>
                    <section className="Product-section">
                        <h2><Link onClick={this.scrollTop}  to="/services/web">Web application</Link></h2>
                        <p>Customise web application design for your need</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Mobile application</a></h2>
                        <p>deep conception in mobile application to get Real-Time users</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">Wordpress</a></h2>
                        <p>Create a blog with wordpress in second</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">IT support</a></h2>
                        <p>Get the asset needed to manage you department</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">Cloud</a></h2>
                        <p>Help to configure your system to get the most of the cloud</p>
                   </section>
               
            </div>
            <div className="overlay"></div>
           
                    <ul className="submenu">
                    <Subitem>Sofware integration</Subitem>
                    <Subitem ><Link className="link" to="/services/web" onClick={this.scrollTop}>Web application</Link></Subitem>
                    <Subitem>Mobile application</Subitem>
                    <Subitem>Wordpres</Subitem>
                    <Subitem>IT suppor</Subitem>
                    <Subitem>Cloud</Subitem>
                </ul>
                    
                </Item>
            
               <Item>Solution
                    <div className="Products">
                    <section className="Product-section">
                        <h2><a href="">E-commerce API</a></h2>
                        <p>Standard Api e-commerce site already build and waiting for your data</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">2d Game</a></h2>
                        <p>2D conception for android and ios</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Learning platform</a></h2>
                        <p>Get access to our learning platform</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Web template</a></h2>
                        <p>Dowload our new web template to start building</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">Api Template</a></h2>
                        <p>More infos</p>
                   </section>
                   
               
               </div>
           
                <ul className="submenu">
                <Subitem>E-commerce API</Subitem>
                <Subitem>2d Game</Subitem>
                <Subitem>Learning platform</Subitem>
                <Subitem>Web template</Subitem>
                <Subitem>Api Template</Subitem>
                </ul>

            </Item>
                    <Item>Pricing
                        <div className="Products" >
                        <section className="Product-section">
                            <h2><a href="">Web package</a></h2>
                            <p>See our offers</p>
                        </section>
                        <section className="Product-section">
                            <h2><a href="">Mobile package</a></h2>
                            <p>See our offers</p>
                        </section>
                    <section className="Product-section">
                            <h2><a href="">Training package</a></h2>
                            <p>See our offers</p>
                    </section>
                    
                
                </div>
                    <ul className="submenu">
                                            <Subitem>Web package</Subitem>
                                            <Subitem>Mobile package</Subitem>
                                            <Subitem>Training package</Subitem>
                                        
                                    </ul>
                
                    </Item>
                    <Item>Learn
                    
                            <div className="Products">
                            <section className="Product-section">
                                <h2><Link onClick={this.reloadpage} to="/learn/spa">Web developer path</Link></h2>
                                <p>Learn how to build web application with angular,laravel and node</p>
                            </section>
                            <section className="Product-section">
                                <h2><a href="">Mobile developer path</a></h2>
                                <p>Learn how to build mobile application with android,react native and flutter</p>
                        </section>
                        <section className="Product-section" >
                                <h2><a href="">Tech support path</a></h2>
                                <p>Learn how to manage system and deploy big IT infrastructure</p>
                        </section>
                        
                    
            </div>
                    <ul className="submenu">
                                        <Subitem>Web developer path</Subitem>
                                        <Subitem>Mobile developer path</Subitem>
                                        <Subitem>Tech support path</Subitem>
                                    
                                </ul>
                    </Item>
                    <Item>Opportunity

                    <div className="Products" >
                            <section className="Product-section">
                                <h2><a  href="https://legrowtech.com/jobs" onClick={this.scrollTop}>Jobs</a></h2>
                                <p>Eager to learn?, Join the team to get experience and help us build application.
                                    We are a growing team and need talent to help us.
                                </p>
                            </section>
                            <section className="Product-section">
                                <h2><a href="">Training</a></h2>
                                <p>Get plenty of training and help of expert to grow in the tech field</p>
                            </section>
                            <section className="Product-section">
                                <h2><a href="">Intership</a></h2>
                                <p>we provide a intership programm for student</p>
                        </section>
                        
                    
                         </div>
                         <ul className="submenu">
                         <Subitem><Link className="link" to="/jobs" onClick={this.scrollTop}>Jobs</Link></Subitem> 
                                <Subitem>Training</Subitem>
                                <Subitem>Intership</Subitem>
                             
                         </ul>
                    </Item>

                  

                </ul>
            </div>
           
    </header>
     
     </>
        )

    }
        

}
