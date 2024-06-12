import React, { useState } from "react";

import {  Route, Routes, Link,NavLink } from 'react-router-dom';


import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Joinus from "./components/JoinUs/Joinus";

import App1 from './App1'

import Emb from './pages/Emb';
import IOT from "./pages/IOT";
import Web from "./pages/Web";


const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    
      
        <div>
       
      <Navbar />
     
          

      <Hero />
      <div className="container">
      <Title subtitle="Our Services" title="What We Offer" />

        
      
       
         
    <Routes>

      <Route path="/" element={<Services/>} />
      <Route  path= '/section2' element = {<Emb />} />
      <Route  path= '/section1' element = {<IOT />} />
      <Route  path= '/section3' element = {<Web />} />
    </Routes>
       


        <About setPlayState={setPlayState} />
        <Title subtitle="Gallery" title="Office Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Customer Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Title  title="Come With Us" />
        <Joinus />
        <Footer />
      </div>

      

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    
    
      
   
  );
};

export default App;
