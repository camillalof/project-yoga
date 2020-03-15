import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

import './intro.css'

export const Intro = () => {
  const history = useHistory()



return (
  <div> 
  <ReactPlayer 
    url='https://res.cloudinary.com/projectyoga/video/upload/v1584311023/projectyoga/video/mixkit-upward-and-downward-facing-dog-892_jjbuom.mp4'
    playing
    width='100%'
    height='100%'
    /> 
  </div>    
  )
}