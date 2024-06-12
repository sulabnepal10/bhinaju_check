import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/ndslogo.png'
import menu_icon from '../../assets/menu-icon.png'

import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  const [sticky,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)  
    })
  },[]);


  const [mobileMenu,setMobileMenu]= useState(false);
  const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false): setMobileMenu(true);
  }


  return (


    <nav className={` navbar container ${sticky? 'dark-nav' : '' }`}>
   <Link to = 'hero' smooth={true} offset={0} duration={500}> <img src ={logo}  alt="logo" className='logo' /></Link> 
    

  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li className="nav-item active">
          <a className="nav-link" href="/"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></a>
        </li>


       <li className="dropdown">
          <a className="nav-link" href="/program"><Link to='program' smooth={true} offset={-260} duration={500}>Services</Link></a>
          <div class="content"> 

           <NavLink to="/section1">IoT </NavLink>

           <NavLink to="/section2">Embedded System Engineering </NavLink>
           <NavLink to="/section3">Web Application Development </NavLink>
           <NavLink to="/section3">Mobile Application Development </NavLink>
          
          

           </div>

        </li>

        <li className="nav-item">
          <a className="nav-link" href="/about" ><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></a>
        </li>

        

        <li className="nav-item">
          <a className="nav-link" href="/programs"><Link to='carousel' smooth={true} offset={-260} duration={500}>Program</Link></a>
        </li> 


        <li className="nav-item">
          <a className="nav-link" href="./testimonials"><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></a>
        </li>

        <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        
      
        
        
       
          
        </ul>
        <img src={menu_icon} alt="" srcset="" className='menu-icon' onClick={toggleMenu} />
      
    </div>
  </nav>


  )
}

export default Navbar
