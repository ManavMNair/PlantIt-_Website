import React from 'react'
import './Footer.css'
import logo from '../Assets/Homepage/LOGO-Final-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-main">
            
            <div className="footer-about">
                <h4>ABOUT</h4>
                <Link to={'/aboutUs'}><p>About Us</p></Link>
                <Link to={'/contactUs'}><p>contact Us</p></Link>
            </div>
            
            <div className="footer-logo">
                <img src={logo} alt="" />

            </div>
            <div className="footer-help">
                <h4>HELP</h4>
                <Link to={'/payments'}><p>Payments</p></Link>
                <Link to={'/faqs'}><p>FAQs</p></Link>
                <Link to={'/return&refund'}><p>Return & Refund</p></Link>
                
            </div>

        </div>
        <div className="footer-copyright">
            &copy;&nbsp; PlantIt &nbsp; 2024
        </div>
      
    </div>
  )
}

export default Footer
