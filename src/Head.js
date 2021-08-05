import React,{Component} from 'react'
import './head.css'
import {BsGridFill ,BsGrid,BsChevronDown,BsPlus} from "react-icons/bs";
import $ from 'jquery';


export default class Head extends Component {
    constructor(props){
        super(props)
        this.state={
            iconIsToggle:false,
            isSubmenuServiceToggle:false,
            isSubmenuSolutionToggle:false
            
        }
    }


 
    toggleItemStyle=()=>{

       
        const menu1=$('.header-item')
        const menu2=$('.header-option')



        function ToggleMenu(){
            if(menu1.hasClass('select')){
                menu1.removeClass('select')
                menu2.removeClass('select')
    
            }else{
                menu1.addClass('select')
                menu2.addClass('select')

            }
          }
        $('.heard-bar').on('click',()=>{
            ToggleMenu()
       
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
                    <li className={this.state.isSubmenuServiceToggle?"item dropdown submenu-active":"item dropdown "} onClick={()=>this.setState({isSubmenuServiceToggle:!this.state.isSubmenuServiceToggle})} >
                    
                   <a tabIndex="0">Services</a>  <BsChevronDown className="ChevronDown"  color="white"/> <BsPlus className="Plus" size="1.5em" color="white" />
                    <ul className="submenu">
                        <li className="subitem"><a href="#">Design</a></li>
                        <li className="subitem"><a href="#">Development</a></li>
                        <li className="subitem"><a href="#">SEO</a></li>
                        <li className="subitem"><a href="#">Copywriting</a></li>
                    </ul>
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
                    
                    </li>
                    <li className={this.state.isSubmenuSolutionToggle?"item dropdown submenu-active":"item dropdown "} onClick={()=>this.setState({isSubmenuSolutionToggle:!this.state.isSubmenuSolutionToggle})} ><a className="tabindex">Solution</a> <BsChevronDown className="ChevronDown" color="white"/> <BsPlus className="Plus" size="1.5em" color="white" />
                    <ul className="submenu">
                        <li className="subitem"><a href="#">Design</a></li>
                        <li className="subitem"><a href="#">Development</a></li>
                        <li className="subitem"><a href="#">SEO</a></li>
                        <li className="subitem"><a href="#">Copywriting</a></li>
                    </ul>
                    <div className="Solution">
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
            </li>
                    <li className="item">Pricing  <BsChevronDown className="ChevronDown" color="white"/> <BsPlus className="Plus" size="1.5em" color="white"/></li>
                    <li className="item">Learn <BsChevronDown className="ChevronDown" color="white"/> <BsPlus className="Plus" size="1.5em" color="white"/></li>
                    <li className="item">More <BsChevronDown className="ChevronDown" color="white"/> <BsPlus className="Plus" size="1.5em" color="white"/></li>
                  

                </ul>
            </div>
    </header>
        )

    }
        

}
