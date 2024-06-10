import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

    const sliderr = useRef();
    let tx = 0;


    const slideForward = ()=> {
        if(tx>-50){
            tx -= 25; 
        }
        sliderr.current.style.transform = `translateX(${tx}%)`;

    }


    const slideBackward = ()=> {
        if(tx<0){
            tx += 25; 
        }
        sliderr.current.style.transform = `translateX(${tx}%)`;
        
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" srcset=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" srcset=""  className='back-btn' onClick={slideBackward}/>
        <div className="sliderr">
            <ul ref={sliderr} >
                
            <li>
                    <div className="slidess">
                        <div className="user-info">
                            <img src={user_1} alt="" srcset="" />
                            <div>
                                <h3>Sulab Nepal 1</h3>
                                <span>Jhapa,Nepal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.  </p>

                    </div>
                </li>

                <li>
                    <div className="slidess">
                        <div className="user-info">
                            <img src={user_2} alt="" srcset="" />
                            <div>
                                <h3>Sulab Nepal 2</h3>
                                <span>Jhapa,Nepal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.  </p>

                    </div>
                </li>

                <li>
                    <div className="slidess">
                        <div className="user-info">
                            <img src={user_3} alt="" srcset="" />
                            <div>
                                <h3>Sulab Nepal 3</h3>
                                <span>Jhapa,Nepal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.  </p>

                    </div>
                </li>

                <li>
                    <div className="slidess">
                        <div className="user-info">
                            <img src={user_4} alt="" srcset="" />
                            <div>
                                <h3>Sulab Nepal 4</h3>
                                <span>Jhapa,Nepal</span>
                            </div>
                        </div>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.  </p>

                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
