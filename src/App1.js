import React from 'react'
import {  Route, Routes, Link } from 'react-router-dom';

import Services from "./components/Services/Services";
import Navbar from "./components/Navbar/Navbar";
import App from './App'


import Emb from './pages/Emb';
import IOT from "./pages/IOT";
import Web from "./pages/Web";


const App1 = () => {
  return (
  <>
    <Navbar />
   
    
    <Routes>

          <Route path="/" element={<Services/>} />
          <Route  path= '/section2' element = {<Emb />} />
          <Route  path= '/section1' element = {<IOT />} />
          <Route  path= '/section3' element = {<Web />} />
    </Routes>
       
    
  </>
  )
}

export default App1
