import React,{Component,children} from 'react'
import './head.css'
import {BsGridFill ,BsGrid,BsChevronDown,BsPlus} from "react-icons/bs";
import $ from 'jquery';
import Item from './Item'
import Subitem from './Subitem'


export default class Head extends Component {
    constructor(props){
        super(props)
        this.state={
            iconIsToggle:false
        }
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


    componentDidMount(){
        this.toggleItemStyle()
       

      }
    render() {
        return(
            <header>
            <div>
            <ul className="header-option">
                    <li className="logo">Logo </li>
                    <li className="heard-bar" onClick={()=>{this.setState({iconIsToggle:!this.state.iconIsToggle})}}> {this.state.iconIsToggle?<BsGridFill size="1.6em" color="white"/>:<BsGrid size="1.6em" color="white"/>} </li>
                    <li className="item">Contact us <BsPlus className="Plus" size="1.5em" color="white"/></li>
                    <li className="item">Support <BsPlus className="Plus" size="1.5em" color="white"/></li>
                    <li className="item">English <BsPlus className="Plus" size="1.5em" color="white"/></li>
                   
                  
                   
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
                        <h2><a href="">Web application</a></h2>
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
                    <li className="subitem"><a href="#">Design</a></li>
                    <li className="subitem"><a href="#">Development</a></li>
                    <li className="subitem"><a href="#">SEO</a></li>
                    <li className="subitem"><a href="#">Copywriting</a></li>
                </ul>
                    
                </Item>
            
               <Item>Solution
                    <div className="Products">
                    <section className="Product-section">
                        <h2><a href="">Web Management</a></h2>
                        <p>We assist you for configuring your shoppify site</p>
                    </section>
                    <section className="Product-section">
                        <h2><a href="">Web application</a></h2>
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
                <li className="subitem"><a href="#">Design</a></li>
                <li className="subitem"><a href="#">Development</a></li>
                <li className="subitem"><a href="#">SEO</a></li>
                <li className="subitem"><a href="#">Copywriting</a></li>
                </ul>

            </Item>
                    <Item>Pricing</Item>
                    <Item>Learn</Item>
                    <Item>More</Item>
                  

                </ul>
            </div>
    </header>
        )

    }
        

}
