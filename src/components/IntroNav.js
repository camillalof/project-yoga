import React from 'react'
import { Link, Route } from 'react-router-dom'  //NavLink gives the class active, for easier handling of the navigation bar in CSS. Route is for only showing workout when you are on the welcome page.


export const IntroNav = () => {
  return (
      <nav className="introNav"> 
      <h1>Yoga</h1>
        <ul>
          <li>
            <Link to="/login">Log in</Link> 
          </li> 
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </nav> 
  )
}