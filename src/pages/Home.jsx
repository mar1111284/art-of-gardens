// Home.jsx
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import RightArrow from "../assets/shared/right-arrow.png"

// Import components
import FAQ from "../components/FAQ"

//import image
import HeaderDesktop from '../assets/shared/header-desktop.webp'
import HeaderTablet from '../assets/shared/header-tablet.webp'
import HeaderMobile from '../assets/shared/header-mobile.webp'
import ContactForm from "../components/ContactForm"


const Home = () => {

    const [screenWidth, setScreenWidth] = useState('');

    useEffect(() => {
        const checkWidth = () => {
          const width = window.innerWidth;
          if (width <= 480) {
            setScreenWidth('mobile');
          } else if (width > 480 && width <= 1025) {
            setScreenWidth('tablet');
          } else {
            setScreenWidth('desktop');
          }
        };
    
        checkWidth(); // Call the function to set initial screen width
    
        window.addEventListener('resize', checkWidth);
    
        // Cleanup
        return () => {
          window.removeEventListener('resize', checkWidth);
        };
      }, []);

    return (
        <div className='home-container'>

            <div className="home-header">
            <img className="header-image" alt="header-image" src={
                screenWidth === 'mobile' ? HeaderMobile :
                screenWidth === 'tablet' ? HeaderTablet :
                HeaderDesktop
            }></img>
                <div className="image-overlay-light"></div>
                <div className="home-header-content">
                    <p className="home-title">Professional Landscaping Services in Northern Sydney</p>
                    <p className="home-subtitle">Landscaping design is much more than simply planting a few trees and shrubs around your property</p>

                    <div className="button-container">
                        <Link  to="/services" className="learn-more link">Learn more</Link>     
                        <p>or</p>
                        <Link  to="/contact" className="book-consultation link">Book a free consultation</Link>                 
                    </div>
                </div>
            </div>

            <div className="home-description">

                <div className="description-image">
                    <img src={process.env.PUBLIC_URL + '/snipper.jpg'} alt="Worker with Lawn Mower" />
                    <img src={process.env.PUBLIC_URL + '/hedge-trimmer.jpg'} alt="Worker with Hedge Trimmer" />

                </div>

                <div className="description-text">
                    <h2>Your Landscape, Your Way: Crafting Outdoor Spaces to Perfection</h2>
                    <p>
                        Discover the essence of impeccable outdoor living with [Landscaper's Name]. Nestled in the heart of Northern Sydney, we specialize in sculpting lawns and landscapes that resonate with your vision. 
                    </p>
                    <p>
                        With meticulous attention to detail and a passion for perfection, let us redefine your outdoor oasis, ensuring every corner embodies the essence of how it should be.
                    </p>
                </div>
            </div>

            <section className="home-services">

                <div className="service" id="services-description">
                    <div className="image-overlay"></div>
                    <h2>Our Services</h2>
                    <p>At Art of Gardens, we provide comprehensive services, including web design, digital marketing, and consulting. Our expert team delivers high-quality solutions that exceed expectations.</p>
                    <div className="services-link-container"> 
                        <img src={RightArrow} alt="right arrow"></img>
                        <Link className="services-link link" to='/services'>View All Services</Link>
                    </div>
                </div>
                <div className="service" id="services-1">
                    <div className="image-overlay"></div>
                    <h2>Design & Renovation</h2>
                </div>
                <div className="service" id="services-2">
                    <div className="image-overlay"></div>
                    <h2>Garden Care & Maintenance</h2>
                </div>
                <div className="service" id="services-3">
                    <div className="image-overlay"></div>
                    <h2>Watering & Irrigation</h2>
                </div>

            </section>
            
            <section className="questions-section"> 
                <div className="questions-section-container">
                    <FAQ/>
                </div>
                <div className="questions-section-container"><ContactForm/></div>
            </section>
        </div>
    )
  }
  
export default Home