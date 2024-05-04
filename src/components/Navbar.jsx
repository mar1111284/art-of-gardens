import React, {useState, useEffect, useContext} from 'react'
import { Link, useLocation } from "react-router-dom";

// Import assets
import Burger from '../assets/shared/menu_open.png';
import Close from '../assets/shared/menu_close.png';

const Navbar = () => {

  const location = useLocation();
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Check for bodyScroll to avoid unpredictable behavior 
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (navbarExpand) {
      console.log("Disabling scroll");
      htmlElement.style.overflowY = 'hidden';
    } else {
      console.log("Enabling scroll");
      htmlElement.style.overflowY = 'scroll';
    }

    // Clean up effect
    return () => {
      console.log("Re-enabling scroll on cleanup");
      htmlElement.style.overflowY = 'scroll';
    };
  }, [navbarExpand]);


  // Check the viewport / could be a custom hook ?
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Check for bodyScroll avoid unpredictible behavior 
  useEffect(() => {
    navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
    if(!bodyScroll){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'scroll';
    }      
  })

  const handleToggle = () => {
    setNavbarExpand(prev => !prev);
  }

  return (
    <nav className={`navbar-container ${navbarExpand ? "expand" : ""}`}>

      <div className={`background-layer ${navbarExpand ? "expand" : ""}`}></div>

      <div className='navbar'>
        <h2 className='navbar-title'>Art of Gardens</h2>


        <div className={`links-container ${navbarExpand && screenWidth <= 480 ? "expand" : ""}`}>
        <Link className='link' to="/" onClick={navbarExpand ? handleToggle : null}>
          Home
          <div className={location.pathname === '/' ? 'selector selected' : 'selector'}>
            {console.log('Location:', location.pathname)}
            {location.pathname === '/' && console.log('Selected:', 'true')}
          </div>
        </Link>
          <Link className='link' to="/services" onClick={navbarExpand ? handleToggle : null}>
            Services
            <div className={location.pathname === '/services' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/contact"onClick={navbarExpand ? handleToggle : null}>
            Contact
            <div className={location.pathname === '/contact' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/about"onClick={navbarExpand ? handleToggle : null}>
            About
            <div className={location.pathname === '/about' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/blog"onClick={navbarExpand ? handleToggle : null}>
            Blog
            <div className={location.pathname === '/blog' ? 'selector selected' : 'selector'}></div>
          </Link>
        </div>

        <img src={!navbarExpand ? Burger: Close} alt="burger btn" className={`menu-btn ${navbarExpand ? "rotate" : ""}`} onClick={handleToggle}></img>


      </div>



    </nav>


  )
}

export default Navbar
