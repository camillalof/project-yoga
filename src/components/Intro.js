import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { IntroNav } from './IntroNav'
import { Footer } from './Footer'

import './intro.css'

export const Intro = () => {
  const history = useHistory()



return (
  <section className="introContainer"> 
  <IntroNav/>  
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
  <section className="information">
    <p>A free online yoga app based on the chakra system to get a customized yoga class for your daily mood.</p>
    <p className="introLogIn"> Already a member</p>
    <button className="introLogInLink">
      <Link to="/login"> LOG IN HERE</Link>
    </button>  
  </section> 
  <Footer/> 
  </section>    
  )
}