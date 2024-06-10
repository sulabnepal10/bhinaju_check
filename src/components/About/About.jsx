import React from 'react'
import './About.css'
import about_img from '../../assets/IOT3.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=> {
          setPlayState(true)
        }} />
      </div>
      <div className="about-right">
        <h3>About Nepal Digital System</h3>
        <h2>Enhancing Tomorrow's Technology</h2>
        <p>Our group specializes in hardware design, embedded softwares, IoT setup and integration, integrating systems and devices with ease to maximize productivity. Furthermore, we provide all-inclusive services for developing desktop, mobile, and online applications, creating UIs that are easy to use and feature-rich on all platforms. By prioritizing scalability, we make sure that our solutions expand to meet your company's demands. </p>
        <p>Nepal Digital Systems creates edge computing and Internet of Things solutions to help you expand your company using cutting edge, intelligent, high-tech innovation. We can take the load off your shoulders and assist you in concentrating on the things that are most important to you, from strategy to execution. You may rely on us for:</p>
      </div>
    </div>
  )
}

export default About
