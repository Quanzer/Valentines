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
import skel from './img/skeletons.mp3'

import HVW from './img/HVW.png'
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  
  
  return (
    <>
    <div >
       <img style = {{display: "flex",marginBottom: "5%",marginTop: "-65%",marginLeft :"0"}} src = {img9} alt = "Animated GIF"/>
    
    </div>
   
    <div style = {{marginLeft: "5vw", display: "flex"}} className={currentStyle} >
      <span style = {customStyle(1)}> <img className="zoom" src = {img1} alt = "" onClick={toggleStyle} /> </span>
      <span style = {customStyle(2)}> <img className="zoom" src = {img2} alt = "" onClick={toggleStyle}/> </span>
      <span style = {customStyle(3)}> <img className="zoom" src = {img3} alt = "" onClick={toggleStyle}/> </span>
      <span style = {customStyle(4)}> <img className="zoom" src = {img4} alt = "" onClick={toggleStyle}/> </span>
      <span style = {customStyle(5)}> <img className="zoom" src = {img5} alt = "" onClick={toggleStyle}/> </span>
      <span style = {customStyle(6)}> <img className="zoom" src = {img6} alt = "" onClick={toggleStyle}/> </span>
      <span style = {customStyle(7)}> <img className="zoom" src = {img7} alt = "" onClick={toggleStyle}/> </span>
      <span style = {customStyle(8)}> <img className="zoom" src = {img8} alt = "" onClick={toggleStyle}/> </span>
      
      
  
      
    </div >
    <div style = {{position: "absolute", bottom:0, marginLeft :"-7vw", marginBottom: "5vh",display: "flex", height: 60 * .527+ 'vh', width: 60 * .843 + 'vh'}}>
    
    <img  onClick={togglePlayback}   src = {HVW} alt = "" /> 
    
    </div>
    <audio ref={audioRef} loop>
        
        <source src= {skel} type="audio/mpeg" />
        
      </audio>
    </>
  );
};

export default Gallery;
