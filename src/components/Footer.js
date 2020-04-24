import React from 'react'

import { ReactComponent as Flower } from './Flower.svg';
import { ReactComponent as DownArrow } from './DownArrow.svg';

import './footer.css'


export const Footer = () => {
  return (
    <footer> 
     <p className="appDescription">A free online yoga app that gives you customized yoga class for your daily mood. Acoording to traditional yoga philosophy we have 7 energy fields or chakras in our body. Each pose that we do in a yoga session affects a diffent chakra. This means that the most efficiant yoga sessions should be based on your how you are feeling and what type of energy you need in that particular moment. All of our workouts includes poses that affect a wide range of our energy fields, and our randomized functions adds extra poses from the energyfield that you need more of today. So what do you need today? Maybee a little extra energy, a nice calm down session or why not an extra creativity boost?</p>
     <Flower/> 
    </footer> 
  )
}