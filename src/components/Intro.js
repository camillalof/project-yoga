import React, { useRef, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { ReactComponent as DownArrow } from './DownArrow.svg';

import { IntroNav } from './IntroNav'
import { Footer } from './Footer'

import './intro.css'

export const Intro = () => {
  const history = useHistory() 
  const myRef = useRef(null);

  const scrollSmoothHandler = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

return (
  <>
    <IntroNav/> 
    <section className="introContainer">
      <button className="joinLink">  
        <Link to="/signup" className="joinLink">JOIN US</Link>  
      </button>  
    <ReactPlayer 
      url='https://res.cloudinary.com/projectyoga/video/upload/v1584311023/projectyoga/video/mixkit-upward-and-downward-facing-dog-892_jjbuom.mp4'
      playing
      width="100%"
      height="100%" 
      loop={true}
      style={{filter: "opacity(0.5)"}}
    /> 
    <span className="introLoginMember">
      <p className="introLogIn"> Already a member</p>
      <button className="introLogInLink">
        <Link to="/login">
          <p>LOG IN HERE</p>
        </Link>
      </button>
    </span>
    <button 
      type="button"
      onClick={() => scrollSmoothHandler()} 
      className="scroll">
      <DownArrow/>
    </button>  
    <span ref={myRef}>
      <Footer/>
    </span>  
    </section> 
  </> 
  )
}