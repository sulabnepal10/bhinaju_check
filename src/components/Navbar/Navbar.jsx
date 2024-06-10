import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/ndslogo.png'
import { Link} from 'react-scroll';





const Navbar = () => {

  const [sticky,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)  
    })
  },[]);


  return (


    <nav className={` navbar container ${sticky? 'dark-nav' : '' }`}>
    <img src ={logo} alt="logo" className='logo' />
    
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></a>
        </li>


       <li className="dropdown">
          <a className="nav-link" href="/program"><Link to='program' smooth={true} offset={-260} duration={500}>Services</Link></a>
          <div class="content"> 

            <a href="/">IoT</a>

           <a href="/">Embedded System Engineering</a>

            <a href="/">Web Application Development</a>

            <a href="/">Mobile Application Development</a>

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

        <a href='./join'>Joinus </a>
        
        <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
       
          
        </ul>
      
    </div>
  </nav>


  )
}

export default Navbar
