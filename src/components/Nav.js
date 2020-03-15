import React from 'react'
import { NavLink, Route } from 'react-router-dom'  //NavLink gives the class active, for easier handling of the navigation bar in CSS. Route is for only showing workout when you are on the welcome page.


export const Nav = () => {
  return (
      <nav> 
      <h1>Nav</h1>
        <ul>
          <li>
            <NavLink to="/">Log in</NavLink> 
          </li> 
          <li>
            <NavLink to="/signup">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="/welcome">Welcome page</NavLink>
          </li> 
          <li>  
          <Route path="/welcome" exact>
            <NavLink to="/workout">Work out</NavLink>
          </Route> 
          </li> 
        </ul>
      </nav> 
  )
}