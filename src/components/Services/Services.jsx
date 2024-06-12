import React from 'react'
import './Services.css'
import program_1 from '../../assets/IOT2.jpg'
import program_2 from '../../assets/emb.jpg'
import program_3 from '../../assets/web1.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import {Link, NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Services = () => {

    const navigate = useNavigate();

  return (
    <div className='programs'>
      <div className="program">
       <NavLink to = '/section1'>< img src={program_1} width={301} height={383} alt ="" /></NavLink>
        <figcaption>IoT</figcaption>
        <div className="caption">
        <NavLink to = '/section1'>  <img src={program_icon_1} onClick={()=>navigate("/section1")}  alt="" /></NavLink>
            <p></p>
        </div>
      </div>

      

      <div className="program">
       <NavLink to = 'section2'>< img src={program_2} width={301} height={383} alt ="" /></NavLink>
        <figcaption>Embedded System Engineering</figcaption>
        <div className="caption">
        <NavLink to = 'section2'>  <img src={program_icon_2} onClick={()=>navigate("/section2")}  alt="" /></NavLink>
            <p></p>
        </div>
      </div>
      <div className="program">
       <img src={program_3}  width={301.3} height={383} alt ="" />
        <figcaption >Web Development</figcaption>
        <div className="caption">
        <NavLink to = 'section3'>   <img src={program_icon_3} onClick={()=>navigate("/section3")} alt="" /></NavLink>
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default Services
