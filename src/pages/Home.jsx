// Home.jsx
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className='home-container'>

            <div className="home-header">
                <p className="home-title">We provide services in Nothern Sydney since 15 years</p>
                <p className="home-subtitle">Landscaping design is much more than simply planting a few trees and shrubs around your property</p>
                <Link className="learn-more">Learn more</Link>
            </div>

            <div className="home-description">
                <img></img>
            </div>

        </div>
    )
  }
  
export default Home