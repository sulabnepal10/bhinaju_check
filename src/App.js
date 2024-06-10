import React, { useState } from 'react'

import {BrowserRouter, Route ,Routes, Switch} from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'





const App = () => {

  const [playState,setPlayState]= useState(false);

  return (
    
   
    <div>
      
          
         <Navbar />
      
     
       
       <Hero />
       <div className="container">
         <Title subtitle='Our Services' title ='What We Offer'/>
         <Services />
        
           
          <About setPlayState={setPlayState}/>
          <Title subtitle='Gallery' title ='Office Photos'/>
        <Campus />
        <Title subtitle='Testimonials' title ='What Customer Says'/>
        <Testimonials />
        <Title subtitle='Contact Us' title ='Get In Touch'/>
        <Contact />
        <Footer />

      </div>
      
    <VideoPlayer playState={playState} setPlayState = {setPlayState} />
     
    </div>
    
 
   
    
  )
}

export default App
