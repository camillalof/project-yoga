import React from 'react'
import { Link, Route } from 'react-router-dom'  //NavLink gives the class active, for easier handling of the navigation bar in CSS. Route is for only showing workout when you are on the welcome page.


export const IntroNav = () => {
  return (
    <span className="introNavContainer">
      <h1 className="introNavH1">Online yoga classes</h1>
      <nav className="introNav"> 
        <ul className="aboutSection">
          <li>
            <Link to="/">ABOUT</Link> 
          </li> 
        </ul>    
        <ul className="introNavUl">
          <li>
            <Link to="/login">LOG IN</Link> 
          </li> 
          <li>
            <Link to="/signup">SIGN UP</Link>
          </li>
        </ul> 
      </nav> 
    </span>  
  )
}