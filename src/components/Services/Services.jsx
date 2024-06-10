import React from 'react'
import './Services.css'
import program_1 from '../../assets/IOT2.jpg'
import program_2 from '../../assets/emb.jpg'
import program_3 from '../../assets/web1.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Services = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} width={301} height={383} alt ="" />
        <figcaption>IoT</figcaption>
        <div className="caption">
            <img src={program_icon_1}  alt="" /> 
            <p></p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} width={301} height={383} alt ="" />
        <figcaption>Embedded System Engineering</figcaption>
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p></p>
        </div>
      </div>
      <div className="program">
        <img src={program_3}  width={301.3} height={383} alt ="" />
        <figcaption>Web Development</figcaption>
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p></p>
        </div>
      </div>
    </div>
  )
}

export default Services
