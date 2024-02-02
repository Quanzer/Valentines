// src/Gallery.js
import React, { useState,useEffect} from 'react';

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import './gallery.css'

import img1 from './img/img1.JPG'
import img2 from './img/img2.JPG'
import img3 from './img/img3.JPG'
import img4 from './img/img4.JPG'
import img5 from './img/img5.JPG'
import img6 from './img/img6.JPG'
import img7 from './img/img7.JPG'
import img8 from './img/img8.JPG'
import cGIF from './img/cinamorollDance.gif'
import cStill from './img/cinStill.png'
import skel from './img/skeletons.mp3'

import HVW from './img/HVW.png'
const Gallery = () => {
   const [text, setText] = useState("");
  const [anchor, setAnchor] = React.useState(null);
  const [currentStyle, setCurrentStyle] = useState('slider');
  const getImg = (imgSrc) =>{
    console.warn(imgSrc)
  }
  
  const toggleStyle =  (event, index) => {
    switch (index) {
    case 1:
      setText("I love you");
      break;
    case 2:
      setText("You're my sunshine");
      break;
    case 3:
      setText("You make my heart skip a beat");
      break;
    case 4:
      setText("You complete me");
      break;
    case 5:
      setText("You're my everything");
      break;
    case 6:
      setText("You're the reason for my smile");
      break;
    case 7:
      setText("I'm so lucky to have you");
      break;
    case 8:
      setText("You mean the world to me");
      break;
    default:
      setText("You're special to me");
  }

    
    setAnchor(anchor ? null : event.currentTarget);
    setCurrentStyle(currentStyle === 'slider' ? 'sliderPause' : 'slider');
  };
  const handleClick = (event) => {
    
  };
  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;


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
  const [isZoomed, setIsZoomed] = useState(false);

 
  useEffect(() => {
    let timeoutId;
    if (isZoomed) {
      timeoutId = setTimeout(() => {
        setIsZoomed(!isZoomed);
      }, 200); // Adjust the duration as needed (in milliseconds)
    }
    return () => clearTimeout(timeoutId);
  }, [isZoomed]);
  return (
    <>
   
    <div style = {{marginLeft :"10vw", marginTop: "-16vh"}}>
        
    <div style = {{  marginBottom:"5vh"}}>
    <img  style = {{ height: "80%", width: "80%"}} className={isZoomed ? 'zoomed' : 'notzoomed'}  src = {HVW} alt = "" /> 
       
    
    </div>
   
    <div style = {{position: "relative",zIndex: 1, marginLeft: "15vw", display: "flex"}} className={currentStyle} >
    <BasePopup id={id} open={open} anchor={anchor}>
        <PopupBody>{text}</PopupBody>
      </BasePopup>      
      <span style = {customStyle(1)}> <img className="zoom" src = {img1} alt = "" onClick={(e) => toggleStyle(e, 1)} /> </span>
      <span style = {customStyle(2)}> <img className="zoom" src = {img2} alt = "" onClick={(e) => toggleStyle(e, 2)}/> </span>
      <span style = {customStyle(3)}> <img className="zoom" src = {img3} alt = "" onClick={(e) => toggleStyle(e, 3)}/> </span>
      <span style = {customStyle(4)}> <img className="zoom" src = {img4} alt = "" onClick={(e) => toggleStyle(e, 4)}/> </span>
      <span style = {customStyle(5)}> <img className="zoom" src = {img5} alt = "" onClick={(e) => toggleStyle(e, 5)}/> </span>
      <span style = {customStyle(6)}> <img className="zoom" src = {img6} alt = "" onClick={(e) => toggleStyle(e, 6)}/> </span>
      <span style = {customStyle(7)}> <img className="zoom" src = {img7} alt = "" onClick={(e) => toggleStyle(e, 7)}/> </span>
      <span style = {customStyle(8)}> <img className="zoom" src = {img8} alt = "" onClick={(e) => toggleStyle(e, 8)}/> </span>
      
    </div >
  
    <div style = {{position: "relative", zIndex: 2, bottom:0,marginBottom:"-9vh", marginLeft :"-5vw", marginTop: "30vh",display: "flex"}}>
   
    <img onClick={togglePlayback}  className={isZoomed ? 'zoomed' : 'notzoomed'} style = {{ height: "70%", width: "70%",  display: "flex",marginBottom: "5%",marginTop: "-65%",marginLeft :"8vw"}} 
       src = {isPlaying? cGIF : cStill} alt = "Animated GIF"/>
    
    </div>
    </div>
    <audio ref={audioRef} loop>
        
        <source src= {skel} type="audio/mpeg" />
        
      </audio>
   
    </>
  );
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
  };
  
  const PopupBody = styled('div')(
    ({ theme }) => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem;
    z-index: 1;
  `,
  );
  
  const Button = styled('button')(
    ({ theme }) => `
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${blue[500]};
    box-shadow: 0 2px 1px ${
      theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
    }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &:active {
      background-color: ${blue[700]};
      box-shadow: none;
    }
  
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  
    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
      &:hover {
        background-color: ${blue[500]};
      }
    }
  `,
  );

export default Gallery;
