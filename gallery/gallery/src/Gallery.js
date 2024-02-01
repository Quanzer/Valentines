// src/Gallery.js
import React, { useState } from 'react';
import './gallery.css'

import img1 from './img/img1.JPG'
import img2 from './img/img2.JPG'
import img3 from './img/img3.JPG'
import img4 from './img/img4.JPG'
import img5 from './img/img5.JPG'
import img6 from './img/img6.JPG'
import img7 from './img/img7.JPG'
import img8 from './img/img8.JPG'
import img9 from './img/cinamorollDance.gif'

const Gallery = () => {
  const [currentStyle, setCurrentStyle] = useState('slider');
  const getImg = (imgSrc) =>{
    console.warn(imgSrc)
  }
  const toggleStyle = () => {
    setCurrentStyle(currentStyle === 'slider' ? 'sliderPause' : 'slider');
  };
  const customStyle = (i) => {
    return {
      '--i': i,
      // Add more custom properties if needed
    };
  };
  return (
    <>
    
    
    <div class={currentStyle} onClick={toggleStyle}>
      <span style = {customStyle(1)}> <img src = {img1} alt = ""/> </span>
      <span style = {customStyle(2)}> <img src = {img2} alt = ""/> </span>
      <span style = {customStyle(3)}> <img src = {img3} alt = ""/> </span>
      <span style = {customStyle(4)}> <img src = {img4} alt = ""/> </span>
      <span style = {customStyle(5)}> <img src = {img5} alt = ""/> </span>
      <span style = {customStyle(6)}> <img src = {img6} alt = ""/> </span>
      <span style = {customStyle(7)}> <img src = {img7} alt = ""/> </span>
      <span style = {customStyle(8)}> <img src = {img8} alt = ""/> </span>
      
      <div className="gif-container">
       <img style = {{marginTop :"-12vh",marginLeft :"-5vw"}} src = {img9} alt = "Animated GIF"/>
    
    </div>
   
      
    </div>
    </>
  );
};

export default Gallery;
