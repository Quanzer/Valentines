// src/Gallery.js

import React from 'react';
import './gallery.css'

import img1 from './img/img1.JPG'
import img2 from './img/img2.JPG'
import img3 from './img/img3.JPG'
import img4 from './img/img4.JPG'
import img5 from './img/img5.JPG'
import img6 from './img/img6.JPG'
import img7 from './img/img7.JPG'
import img8 from './img/img8.JPG'
import img9 from './img/img9.JPG'

const Gallery = () => {
    let data = [
        {id:1,
        imgSrc: img1,},
        {id:2,
        imgSrc:img2,},
        {id:3,
        imgSrc:img3,},
        {id:4,
        imgSrc: img4,},
        {id:5,
        imgSrc:img5,},
        {id:6,
        imgSrc:img6,},
        {id:7,
        imgSrc: img7,},
        {id:8,
        imgSrc:img8,},
        {id:9,
        imgSrc:img9,},

    ]
  return (
    <>
    <div className='gallery'>
      {data.map((item, index) =>{
        return(
            <div className='pics' key= {index}>
            <img src={item.imgSrc} style={{width: '100%', height: '100%'}}/>
            </div>
        )
      })}
        
    </div>
    </>
  );
};

export default Gallery;
