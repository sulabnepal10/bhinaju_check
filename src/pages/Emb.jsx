import React from 'react'
import './Emb.css'
import bag from '../assets/dai1.jpg'
import img1 from '../assets/dai2.jpg'



const Emb = () => {
  return (
    <div>
        <section className="section2" id="effect">
       <div className="paras">
       <p className="sectionTag text-big"><h2>Embedded System Engineering</h2></p>
       <p className="sectionSubTag text-small">Embedded Software Engineering is the process of controlling various devices and machines that are different from traditional computers, using software engineering. Integrating software engineering with non-computer devices leads to the formation of embedded system.Embedded systems are typically popular in medical science, consumer electronics, manufacturing science, aviation, automotive technology.<br></br>At Nepal Digital Systems, we are experts in Embedded System Design and Development. We use our expertise in electronics, computer hardware, and software engineering to create custom solutions that are tailored to meet our clients' specific needs. Our team of experienced engineers can design and develop embedded systems for a wide range of applications, including industrial automation, medical devices, automotive, consumer electronics, and more. We work closely with our clients to understand their requirements and create a solution that meets their technical and budgetary requirements
    </p>
    </div>
       <div className="thumbnail"></div>
       <img src={bag} alt="laptop_2nd image" className="imgFluid1" />
    </section>
    
    <br></br>

    <section className="section2 section-left " id="aboutt">
        <div className="paras">
       <p className="sectionTag text-big"><h2>What We Do?</h2></p>
       <p className="sectionSubTag text-small"> 
         Our embedded system design services include hardware design, software development, firmware development, and system integration. We also offer testing and validation services to ensure that our solutions meet the highest standards of quality and reliability. Our expertise in embedded systems allows us to create innovative solutions that are efficient, reliable, and cost-effective. We use the latest technologies and design practices to create custom hardware platforms that are optimized for performance, power consumption, and cost. We also develop custom software that is optimized for the specific hardware platform, ensuring maximum efficiency and reliability. Whether you need a simple microcontroller-based system or a complex embedded system with multiple subsystems, we can help. Our team has the expertise and experience to take on even the most challenging embedded system design and development projects. Contact us today to learn more about our Embedded System Design and Development services.
    </p>
    </div>
       <div className="thumbnail"></div>
       <img src={img1} alt="laptop_image" className="imgFluid" />
    </section>

    
             
   </div>
       
      
   

   
   
  )
}

export default Emb
