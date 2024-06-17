import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/ndslogo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link,useNavigate } from 'react-router-dom';


import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const navigate = useNavigate();

    const handleServicesClick = (e) => {
      e.preventDefault();  // Prevent the default link behavior
      navigate('/services');  // Redirect to the /services page
    };

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, []);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }


    return (
        <nav className={` navbar container ${sticky ? 'dark-nav' : ''}`}>
            <Link to='hero' smooth={true} offset={0} duration={500}> <img src={logo} alt="logo" className='logo' /></Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                    <li className="nav-item active">
                        <a className="nav-link" href="/hero"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></a>
                    </li>
                    <li></li>
      
                    <li className="nav-item">
                        <a className="nav-link" href="/about" ><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/about" ><Link to='/services' smooth={true} offset={-150} duration={500}>Services</Link></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/gallery"><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./testimonials"><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></a>
                    </li>
                    <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
                    <li> <Link to='inputs' smooth={true} offset={-260} duration={500} className='btn'>Join Us</Link></li>
                </ul>
                <img src={menu_icon} alt="" srcset="" className='menu-icon' onClick={toggleMenu} />
            </div>
        </nav>


    )
}

export default Navbar
