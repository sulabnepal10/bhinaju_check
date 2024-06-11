import React from 'react'
import { BrowserRouter ,Routes,  Route } from "react-router-dom";
import Services from "./components/Services/Services";
import Navbar from "./components/Navbar/Navbar";

import Emb from './pages/Emb';
import IOT from "./pages/IOT";
import Web from "./pages/Web";


const App1 = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
          <Route  path= '/section2' element = {<Emb />} />
          <Route  path= '/section1' element = {<IOT />} />
          <Route  path= '/section3' element = {<Web />} />
        </Routes>
        <Services />
    
    </BrowserRouter>
  )
}

export default App1
