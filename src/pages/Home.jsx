// Home.jsx
import { Link } from "react-router-dom"
import RightArrow from "../assets/shared/right-arrow.png"

// Import components
import FAQ from "../components/FAQ"

//import image
import HeaderImage from '../assets/shared/home2.jpg'

const Home = () => {

    return (
        <div className='home-container'>

            <div className="home-header">
                <img className="header-image" alt="header-image" src={HeaderImage}></img>
                <div className="image-overlay-light"></div>
                <div className="home-header-content">
                    <p className="home-title">The Best Landscaping Services in Northern Sydney</p>
                    <p className="home-subtitle">Landscaping design is much more than simply planting a few trees and shrubs around your property</p>
                    <Link  to="/services" className="learn-more link">Learn more</Link>                    
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

            <FAQ/>
        </div>
    )
  }
  
export default Home