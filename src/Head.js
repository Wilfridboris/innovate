import React,{useState} from 'react'
import './head.css'

export default function Head() {
    return (
        <>
        <header>
                <div>
                <ul className="header-option">
                        <li className="logo">Logo</li>
                        <li className="item">Contact us</li>
                        <li className="item">Support</li>
                        <li className="item">English</li>
                      
                       
                </ul>

                </div>
                <div>
                    <ul className="header-item">
                        <li className="item dropdown">
                        
                        Services
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
                        <li className="item dropdown">Solution
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
                        <li className="item">Pricing</li>
                        <li className="item">Learn</li>
                        <li className="item">More</li>
                    </ul>
                </div>
        </header>
       

     </>
    )
}
