import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import { ReactComponent as Flower } from './Flower.svg';

import { Nav } from './Nav'

import './welcomepage.css'

const URL = 'http://localhost:8080/users'

export const WelcomePage = () => {
  const accessToken = window.localStorage.getItem('accessToken')
  const userId = window.localStorage.getItem('userId')

  const [notAuthorized, setNotAuthorized] = useState(false)
  const [user, setUser] = useState(null)

  const history = useHistory()

  useEffect(() => {
    fetch(`${URL}/${userId}`, {
    method: 'GET', 
    headers: {
      Authorization: accessToken
    }
  })
  .then()
  .then((user) => {
    if (user.loggedOut) {
      setNotAuthorized(true)
    } else {
      setUser(user)
    }
  })
  .catch((err) => {
    setNotAuthorized(true)
  })
  }, [userId, accessToken])

  const handleLogOut = () => {
    history.push('/login') //return to login page
    window.localStorage.clear() // clears data
    setNotAuthorized(true)
    console.log('accessToken')
  }
  
  return (
    <>
    <Nav/>
    {notAuthorized && 
      <span className='memberSection'> 'You are not authorized' </span>}
    {!notAuthorized && 
      <body className="welcomeContainer">
      <header className="welcomepageHeader">
        <Flower/>
        <h3>What type of yoga do you need today?</h3>
      </header>
      <section className="linkSection">
        <Link className="energy" to="/energy">Energy boost</Link>
        <Link className="selfconfidence" to="/selfconfidence">Self confidence</Link>
        <Link className="healing" to="/healing">Healing</Link>
        <Link className="calmdown" to="/calmdown">Calm down</Link>
        <Link className="creativity" to="/creativity">Creativity boost</Link>
      </section>
      <button onClick={handleLogOut} className="backLink">
        Log out
      </button>
      </body>}
    </>
  )
}