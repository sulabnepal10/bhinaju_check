import React from 'react'

import './Campus.css'

import gallery_1 from '../../assets/dai1.jpg'
import gallery_2 from '../../assets/dai2.jpg'
import gallery_3 from '../../assets/dai3.jpg'
import gallery_4 from '../../assets/dai4.png'

const Campus = () => {
  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })
  return(

<section aria-label="Newest Photos">
    <div className="carousel" data-carousel>
      <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li className="slide" data-active >
          <img src={gallery_1}  alt="taku"/>
        </li>
        <li className="slide" data-active>
          <img src={gallery_2} alt="fanki"/>
        </li>
        <li className="slide" data-active>
          <img src={gallery_3} alt="fanku"/>
        </li>
        <li className="slide" data-active>
          <img src={gallery_4} alt="sanku"/>
        </li>
      </ul>
    </div>
  </section>
  );
 
};
  

export default Campus
