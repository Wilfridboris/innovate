import React,{Component,children} from 'react'
import './head.css'
import {BsGridFill ,BsGrid,BsChevronDown,BsPlus} from "react-icons/bs";
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
       if(window.pageYOffset>200) {
          this.setState({isScroll:true})
       }
       else{
        this.setState({isScroll:false})
       }

       
    }
    reloadpage(){
        setTimeout(()=>{
            window.location.reload()
        },0.1)
    }
    componentDidMount(){
        this.toggleItemStyle()
    
       this.setToggleness();
       window.addEventListener('scroll',()=>this.setToggleness());

      }
    componentWillUnmount(){
        window.removeEventListener('scroll',()=>this.setToggleness());

    }
 
    render() {
        
        return(
            <header className={this.state.isScroll?"fixed":""}>
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
                   
                  
                   
            </ul>

            </div>
            <div>
                <ul className="header-item">
                <Item>Services
                    
                    
                    
                    <div className="Products">
                    <section className="Product-section">
                        <h2><a href="">Shopify</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                    </section>
                    <section className="Product-section">
                        <h2><Link onClick={this.reloadpage} to="/solutions/web">Web application</Link></h2>
                        <p>Customise web application design for your need</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Mobile application</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">Wordpress</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">IT support</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">Cloud</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                   </section>
               
            </div>
                    <ul className="submenu">
                    <Subitem>Design</Subitem>
                    <Subitem>Development</Subitem>
                    <Subitem>SEO</Subitem>
                    <Subitem>Copywriting</Subitem>
                </ul>
                    
                </Item>
            
               <Item>Solution
                    <div className="Products">
                    <section className="Product-section">
                        <h2><a href="">Web Management</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Web Management</a></h2>
                        <p>Customise web application design for your need</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Mobile application</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                   </section>
                   <section className="Product-section">
                        <h2><a href="">Wordpress</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                   </section>
                   
               
               </div>
                <ul className="submenu">
                <Subitem>Design</Subitem>
                <Subitem>Development</Subitem>
                <Subitem>SEO</Subitem>
                <Subitem>Copywriting</Subitem>
                </ul>

            </Item>
                    <Item>Pricing
                        <div className="Products">
                        <section className="Product-section">
                            <h2><a href="">Web Management</a></h2>
                            <p>We assist you for configuring your shoppify site</p>
                        </section>
                        <section className="Product-section">
                            <h2><a href="">Web Management</a></h2>
                            <p>Customise web application design for your need</p>
                        </section>
                        <section className="Product-section">
                            <h2><a href="">Mobile application</a></h2>
                            <p>We assist you for configuring your shoppify site</p>
                    </section>
                    <section className="Product-section">
                            <h2><a href="">Wordpress</a></h2>
                            <p>We assist you for configuring your shoppify site</p>
                    </section>
                    
                
                </div>
                    </Item>
                    <Item>Learn
                    
                            <div className="Products">
                            <section className="Product-section">
                                <h2><Link onClick={this.reloadpage} to="/learn/spa">Spa application</Link></h2>
                                <p>Learn how to build simple application with html,javascript and css</p>
                            </section>
                            <section className="Product-section">
                                <h2><a href="">CI/CD</a></h2>
                                <p>Style your application</p>
                            </section>
                            <section className="Product-section">
                                <h2><a href="">API</a></h2>
                                <p>We assist you for configuring your shoppify site</p>
                        </section>
                        <section className="Product-section">
                                <h2><a href="">Server</a></h2>
                                <p>We assist you for configuring your shoppify site</p>
                        </section>
                        
                    
            </div>
                    </Item>
                    <Item>More</Item>
                  

                </ul>
            </div>
    </header>
        )

    }
        

}
