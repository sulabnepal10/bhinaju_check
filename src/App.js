import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import JoinUs from "./components/JoinUs/Joinus";

function App() {
    const [playState, setPlayState] = useState(false);

    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand as={Link} to="/">NDS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                            <NavDropdown title="Services" id="services-dropdown">
                                <NavDropdown.Item as={Link} to="/services/service1">Service 1</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services/service2">Service 2</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/services/service3">Service 3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                            <Nav.Link as={Link} to="/videos">Videos</Nav.Link>
                            <Nav.Link as={Link} to="/campus">Campus</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/join-us">Join Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/gallery" element={<Gallery subtitle="Gallery" title="Office Photos" />} />
                    <Route path="/services" element={<Services />}>
                        <Route path="service1" element={<ServiceDetail service="Service 1" />} />
                        <Route path="service2" element={<ServiceDetail service="Service 2" />} />
                        <Route path="service3" element={<ServiceDetail service="Service 3" />} />
                    </Route>
                    <Route path="/about-us" element={<About setPlayState={setPlayState} />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/campus" element={<Campus />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/join-us" element={<JoinUs />} />
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
