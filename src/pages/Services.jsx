// Services.jsx

// Import image
import LandscapingDesign from "../assets/shared/service1.webp"
import Service2 from "../assets/shared/service2.webp"
import Service3 from "../assets/shared/service3.webp"

const Services = () => {

    return (
        <div className='services-container'>

            <div className="services-section">
                <h2>Our Services</h2>
                <p>
                    At <span className="medium-green-text">Art of Gardens</span>, we offer a wide range of services to help you create and maintain a beautiful outdoor 
                    space that reflects your style and enhances your property's value. Our team is dedicated to providing high-quality workmanship and exceptional customer service.
                </p>
            </div>

            <div className="services">

                <div className="service">
                    <img className="service-image"src={LandscapingDesign} alt="Landscaping design"></img>
                    <div className="service-content">
                        <h2 className="service-title">Garden Maintenance</h2>
                        <p className="service-description">
                            Our garden maintenance services include regular lawn mowing, weeding, pruning, fertilizing, and pest control to keep your garden healthy and vibrant year-round.
                        </p>
                    </div>
                </div>

                <div className="separator"></div>

                <div className="service">
                    <img className="service-image"src={Service2} alt="Landscaping design"></img>
                    <div className="service-content">
                        <h2 className="service-title">Landscaping Design and Installation</h2>
                        <p className="service-description">
                            We'll work closely with you to create a custom landscape design that suits your preferences and lifestyle. Our skilled team will bring your vision to life with precision and attention to detail.
                        </p>
                    </div>
                </div>

                <div className="separator"></div>

                <div className="service">
                    <img className="service-image"src={Service3} alt="Landscaping design"></img>
                    <div className="service-content">
                        <h2 className="service-title">Tree and Shrub Care</h2>
                        <p className="service-description">
                            Our arborists provide expert care to keep your trees and shrubs healthy and looking their best, from pruning and trimming to disease diagnosis and treatment.
                        </p>
                    </div>
                </div>

                <div className="separator"></div>

                <div className="service">
                    <img className="service-image"src={LandscapingDesign} alt="Landscaping design"></img>
                    <div className="service-content">
                        <h2 className="service-title">Irrigation System Installation and Repair</h2>
                        <p className="service-description">
                            Our team specializes in the design, installation, and repair of efficient irrigation systems tailored to your garden's specific needs, ensuring your plants receive the right amount of water to thrive.
                        </p>
                    </div>
                </div>
            </div>

            <div className="services-section" id="more-questions">
                <h2>More Questions ?</h2>
                <p>If you have any questions or need more details about our services, please don't hesitate to contact us. We're here to help!</p>
                <p>
                    At <span className="medium-green-text">Art of Gardens</span>, we offer a wide range of services to help you create and maintain a beautiful outdoor 
                    space that reflects your style and enhances your property's value. Our team is dedicated to providing high-quality workmanship and exceptional customer service.
                </p>
            </div>

        </div>
    )
  }
  
export default Services
