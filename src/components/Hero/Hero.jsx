import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better quality and service</h1>
            <p>This is the perfect place for your service and request.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default Hero
