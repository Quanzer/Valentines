import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery';
import bg from "./img/bg.jpg";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState} from 'react';

const style = {
  background: "#FFFFFF",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: ".75vh",
  boxShadow: 24,
  width: "78%",
  height: "74%",
  fontFamily: "DM Sans",
  outline: "none",
  border: 'none',
  
  
}

function App() {

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(false);
  }
  const [text] = useTypewriter({
    words: ['Hey (NAME OF SPECIAL PERSON), I know Im not the best when it comes to putting my feelings into words, but I wanted to share this with you. I hope you like it :) (Click on each photo when ur in).'],
   
    typeSpeed: 50,
    deleteSpeed: 80,
  });
  
  return (
    <>
     
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        <Button style = {{paddingTop: "5%",float: "right", color : "#000000" }} onClick={handleClick}><div>X</div></Button>
        <div  style = {{padding: "10%"}}>{text}</div>
        </Box>
      </Modal>
    
    <Gallery/>
    
 
    </>
  );
}

export default App;
