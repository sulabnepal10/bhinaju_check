import React from 'react'
import './Gallery.css'

const Gallery = ({subtitle,title}) => {
  return (
    <div className='title'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Gallery
