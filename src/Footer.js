import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div>
            <div className="footer">

              <div className="footer-item">
                    <ul>
                        <li className="bold-text">Legrowtech</li>
                        <li ><a href="https://cws.legrowtech.com/">CWS</a></li>
                        <li >About us</li>
                        <li>Guides</li>
                        <li>Community</li>
                    </ul>
              </div>
              <div className="footer-item">
                    <ul>
                        <li className="bold-text">solutions</li>
                        <li>Cloud</li>
                        <li>Web app</li>
                        <li>Network</li>
                        <li>Game</li>
                    </ul>
              </div>
              <div className="footer-item">
                    <ul>
                        <li className="bold-text">support</li>
                        <li>Help center</li>
                        <li>site map</li>
                        <li>locations</li>
                       
                    </ul>
              </div>
              <div className="footer-item">
                    <ul>
                        <li className="bold-text">Social</li>
                        <li>facebook</li>
                        <li>app store</li>
                     
                    </ul>
              </div>
            </div>
        </div>
    )
}
