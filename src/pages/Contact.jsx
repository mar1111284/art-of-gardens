// Contact.jsx

import ContactForm from "../components/ContactForm";

// Import Icons 
import Mail from '../assets/shared/mail.png'
import Location from '../assets/shared/location.png'
import Telephone from '../assets/shared/telephone.png'
import ProfileCEO from '../assets/shared/ceo.jpeg'

const Contact = () => {

    return (
        <div className='contact-page-container'>

            <div className='background-shape'>
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

                <div className='profil-container'>
                    <img className='ceo-image' src={ProfileCEO} alt="CEO profile picture"></img>
                    <p><i>John Doe, CEO of Art and Gardens</i></p>
                </div>

            </div>
            

            <div className="contact-page-right-container">
                <h2>Contact Us</h2>
                <h3>Page Under Construction</h3>
                <p>We're currently working hard to bring you an amazing experience on this page. Please bear with us as we put the finishing touches in place. In the meantime, feel free to explore the rest of our website or contact us if you have any questions or need assistance. Thank you for your patience!</p>
                <div className="contact-form-container">
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
  }
  
export default Contact;