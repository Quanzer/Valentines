// src/Gallery.js
import React, { useState,useEffect} from 'react';

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import './gallery.css'
import { Slide,  Zoom } from '@mui/material';

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
      setText("03/28/2023. "+
      "Where it all started, one of our first dates,  and the one of the first moments I started to realize my love for you :).  I remember thinking that day how did you even end up still like me when I was acting the way I was before I knew you liked me."+
      "I tried pushing away my feelings for you before becausae I did not know how you felt, but you made it extremely easy to fall for you again with your kindness, love, and beauty 🤭.");
      break;
    case 2:
      setText("07/01/2023. Remember when we were in the car 👀 and your NorCal friends called you and you wanted me to talk to them, then they suddenly wanted to go to VEGAS. This was still about a month before this picture was taken and it was still early but you wanted me to go. I was a little hesitant but I ended up loving my time in Vegas. I remember one of your friends saying 'Idk how YOUR girl got us into this club, shes is awesome' and I thought to myself that you were pretty amazing and how your friends already viewed us as a couple. We were also the only couple to share a single room together, which I thought was really exciting and cool, ty for that :).");
      break;
    case 3:
      setText("08/16/2023. Despite a day tinged with my sneezing, every moment spent with you here feels like a fairytale come true. From scoring discounted tickets through my sister's friend to wandering hand in hand through Disney's magical world, every laugh, every shared glance, and every thrilling ride was a testament to our love's resilience. As we watched the fireworks light up the night sky, your presence made everything feel enchanting. Together, we explored every corner, tried every delectable treat, and dared every exhilarating ride, creating memories that will forever sparkle like the stars above. With you, every moment is a cherished adventure, and I'm endlessly grateful for the magic you bring into my life.");
      break;
    case 4:
      setText("08/26/2023. Our first rave together and when I met your riverside friends for the first time. Amidst the rolling, I shared my heart's desires, asking if I could meet your family, only to be met with: why haven't I asked you out officially yet? 💞 In that instant, surrounded by the raving crowd of SLANDER, I knew the time was right. I never told you why I took so long but I was dealing with my own emotions about if I felt ready or not to commit to a relationship but that night it made me realize that I shouldn't wait any longer. And so, a week later, in the warmth of our shared love, I asked you to be my girlfriend, and the rest was history 🌟.");
      break;
    case 5:
      setText("09/03/2023. Captured in  lights and delectable aromas of the 626 Night Market, this was the where it all started (again). Together, we navigated through vulnerable conversations, sharing our deepest feelings and desires. And in that moment of shared vulnerability, I realized that love knows no bounds. 🌹 We were talking about our feelings and made a decision together—to delete Hinge, symbolizing our commitment to each other. I asked you to be my girlfriend officially right when I saw you this day, knowing that with you, I have found my home and my heart's truest desire. 💫");
      break;
    case 6:
      setText("10/02/2023. This was a magical night, as we ventured back to the city of Riverside for lavender nights and walked around for a few hours. This was one of the least expensive dates yet it is one of my favorites, I loved just walking around and looking at lights with you and eating the overly salted fries that we bought 😆."
      + "The pictures we took this night were also some of my all time favorites. I found myself captivated not just by the delicate blooms surrounding us, but by the ethereal beauty of the person beside me. 💜 ");
      break;
    case 7:
      setText("01/01/2024. On the last night of Decadence, surrounded by the rave lights, we welcomed the new year with hearts overflowing with love and joy. 🎉 I introduced you for the first time to Vinh and Danny for the first time, and this was a big moment for me as those are two of my closest friends and family members, and I was so happy when they liked you and vice versa. This was also one of my favorite moments of us together as we grew to trust each other more and be honest with each other." 
      + "I'm so lucky to have you in my life.");
      break;
    case 8:
      setText("01/27/2024. In the dazzling lights of our second trip to Vegas, amidst the hours of walking and burning feet, our bond only grew stronger. 🎲 Sharing the excitement of Sin City with my closest friends, I watched happily as you effortlessly connected with them and their girlfriends. 💖 Seeing you laugh and share moments with my friend group brought me immense joy, knowing that you were not just my partner, but an integral part of my life and friendships. Every moment spent with you is a testament to your beauty, both inside and out, and I am endlessly grateful to have you by my side, my radiant beacon of love and light. 🌟 You mean the world to me and I love you.");
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
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsHorizontal(window.innerWidth > window.innerHeight);
    };

    // Initial check
    checkOrientation();

    // Listen for resize events to update orientation
    window.addEventListener('resize', checkOrientation);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);
  return (
    <>
   
    <div style = {{marginLeft :isHorizontal ? "10vw": "10vw", marginTop: "-16vh"}}>     
      <div style = {{ marginLeft :isHorizontal ? "7vw": "4vw",  marginBottom:"5vh"}}>
        <img  style = {{ height:isHorizontal ? "60%": "80%", width: isHorizontal ? "60%": "80%"}} 
        className={isZoomed ? 'zoomed' : 'notzoomed'}  
        src = {HVW} alt = "" /> 
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
  
    <div   style = {{position: "relative", zIndex: 2, bottom:0,marginBottom:"-9vh", marginLeft :"-5vw", marginTop: "30vh",display: "flex"}}>
       
    <Slide direction='out' in={currentStyle == 'slider'} mountOnEnter unmountOnExit >
     
      <img onClick={togglePlayback}  
       className= {!isPlaying? 'onScene' : ''} 
       style = {{ height: isHorizontal ? "40%" : "70%" , width: isHorizontal ? "40%" : "70%",  display: "flex",marginBottom: isHorizontal ? "0%": "-6%" ,marginTop: isHorizontal ? "-26%":"-45%",marginLeft : isHorizontal ?"22%": "8vw"}} 
       src = {isPlaying? cGIF : cStill} alt = "Animated GIF"/>
       </Slide>
    
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
    width: ${window.innerWidth > window.innerHeight? '50vw' : '85vw'};
    
    padding: 5px 5px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#F5F5DC'};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'DM Sans', sans-serif;
    font-size: ${window.innerWidth > window.innerHeight? '1vw' : '1vh'};
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
