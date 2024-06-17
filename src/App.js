import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import './components/Hero/Hero.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";

import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import JoinUs from "./components/JoinUs/Joinus";
import Emb from "./pages/Emb";
import IOT from "./pages/IOT";
import Web from "./pages/Web";

function App() {
    const [playState, setPlayState] = useState(false);

    return (
        
        
        <Router>
            
            
            <div>
            
            <Navbar />
                
                <Routes>
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/gallery" element={<Gallery subtitle="Gallery" title="Office Photos" />} />
                    <Route path="/services/" to='/services/' element={<Services />}>
                        <Route path="/services/section1" element={<ServiceDetail service="Service 1" />} />
                        <Route path="/services/section2" element={<ServiceDetail service="Service 2" />} />
                        <Route path="/services/section3" element={<ServiceDetail service="Service 3" />} />
                    </Route>
                    <Route path="/about" element={<About setPlayState={setPlayState} />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                  
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/inputs" element={<JoinUs />} />
                    <Route path="/services/section3" element={<Services />} />
                    <Route path="/section2" element={<Emb />} />
                    <Route path="/section1" element={<IOT />} />
                    <Route path="/section3" element={<Web />} />
                    <Route path="/videos" element={<VideoPlayer playState={playState} setPlayState={setPlayState} />} />
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

function ServiceDetail({ service }) {
    return <div>{service}</div>;
}


export default App;
