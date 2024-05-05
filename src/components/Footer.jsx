// Footer.jsx

import { Link } from "react-router-dom"

// Import Icon 
import Mail from '../assets/shared/mail.png'
import Location from '../assets/shared/location.png'
import Telephone from '../assets/shared/telephone.png'

const Footer = () => {

    return (
        <div className='footer-container'>
            <div className="image-overlay"></div>
            <div className="footer-content">
                <h2 className='footer-logo'>Art of Gardens</h2>
                <p className="footer-text">Art of Gardens Sydney is proudly crafted by Art of Garden, where nature meets artistry. Explore our outdoor essentials inspired by the beauty of the garden.</p>
                <div className="social-network">
                    <i class="devicon-facebook-plain"></i>
                    <i class="devicon-linkedin-plain"></i>
                    <i class="devicon-github-original"></i>
                </div>
            </div>
            <div className="footer-content">
                <h2 className="content-title">quick link</h2>
                <div className="link-container">
                    <Link to="/privacy" className="footer-link">Policy & Support</Link>
                    <Link className="footer-link">Gallery</Link>
                    <Link  to="/blog" className="footer-link">Blog</Link>
                    <Link to="/carreer"className="footer-link">Carreer & Benefits</Link>
                    <Link className="footer-link">FAQ</Link>
                    <Link to="/about" className="footer-link">About Us</Link>
                    <Link to="/contact"className="footer-link">Contact Us</Link>
                </div>
            </div>
            <div className="footer-content">
                <h2 className="content-title">get in touch</h2>
                <div className="info-container">
                    <img className="footer-icon" src={Location} alt="Location pin icon"></img>
                    <p>42 Bondi Beach Road Sydney, NSW 2026 Australia</p>
                </div>
                <div className="info-container">
                    <img className="footer-icon" src={Telephone} alt="Telephone icon"></img>
                    <p>(+61) 04 214 453</p>
                </div>

                <div className="info-container">
                    <img  className="footer-icon" src={Mail} alt="Mail icon"></img>
                    <p>swiftinbox@emailswift.com</p>
                </div>
            </div>

            <div className="website-info">
                <p>Copyright © 2024 <span className="green-text">Art of Gardens</span>. All rights reserved. Made with React.js by our team.</p>
            </div>
        </div>
    )
  }
  
export default Footer