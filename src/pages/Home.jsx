// Home.jsx
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className='home-container'>

            <div className="home-header">
                <p className="home-title">We provide services in Nothern Sydney since 15 years</p>
                <p className="home-subtitle">Landscaping design is much more than simply planting a few trees and shrubs around your property</p>
                <Link  to="/services" className="learn-more">Learn more</Link>
            </div>

            <div className="home-description">
                <div className="description-image">
                <img className="under" src={process.env.PUBLIC_URL + '/hedge-trimmer.jpg'} alt="Worker with Hedge Trimmer" />
                <img className="over" src={process.env.PUBLIC_URL + '/snipper.jpg'} alt="Worker with Lawn Mower" />

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
                    <h2>Our Services</h2>
                    <p>At Art of Gardens, we provide comprehensive services, including web design, digital marketing, and consulting. Our expert team delivers high-quality solutions that exceed expectations.</p>
                    <Link className="services-link" to='/services'>View All Services</Link>
                </div>
                <div className="service" id="services-1">
                    <h2>Design & Renovation</h2>
                </div>
                <div className="service" id="services-2">
                    <h2>Garden Care & Maintenance</h2>
                </div>
                <div className="service" id="services-3">
                    <h2>Watering and Irrigation</h2>
                </div>

            </section>

        </div>
    )
  }
  
export default Home