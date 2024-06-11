import React from 'react'

import './IOT.css'
import bag from '../assets/dai1.jpg'
import img1 from '../assets/dai2.jpg'


const IOT = () => {
  return (
    <div>
      
        <section class="section1" id="effect">
       <div class="paras">
       <p class="sectionTag text-big">Internet of Things</p>
       <p class="sectionSubTag text-small">The internet of things, or IoT, is a network of interrelated devices that connect and exchange data with other IoT devices and the cloud. IoT devices are typically embedded with technology such as sensors and software and can include mechanical and digital machines and consumer objects.Increasingly, organizations in a variety of industries are using IoT to operate more efficiently, deliver enhanced customer service, improve decision-making and increase the value of the business.

With IoT, data is transferable over a network without requiring human-to-human or human-to-computer interactions
    </p>
    </div>
       <div class="thumbnail"></div>
       <img src={bag} alt="laptop_2nd image" class="imgFluid1" />
    </section>
    
    <br></br>

    <section class="section1 section-left " id="aboutt">
        <div class="paras">
       <p class="sectionTag text-big">What We Do?</p>
       <p class="sectionSubTag text-small"> 
         Our embedded system design services include hardware design, software development, firmware development, and system integration. We also offer testing and validation services to ensure that our solutions meet the highest standards of quality and reliability. Our expertise in embedded systems allows us to create innovative solutions that are efficient, reliable, and cost-effective. We use the latest technologies and design practices to create custom hardware platforms that are optimized for performance, power consumption, and cost. We also develop custom software that is optimized for the specific hardware platform, ensuring maximum efficiency and reliability. Whether you need a simple microcontroller-based system or a complex embedded system with multiple subsystems, we can help. Our team has the expertise and experience to take on even the most challenging embedded system design and development projects. Contact us today to learn more about our Embedded System Design and Development services.
    </p>
    </div>
       <div class="thumbnail"></div>
       <img src={img1} alt="laptop_image" class="imgFluid" />
    </section>

    
             
    </div>
  )
}

export default IOT
