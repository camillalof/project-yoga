import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'
import { ReactComponent as BlackFlower } from './BlackFlower.svg';

import { Nav } from './Nav'

import './welcomepage.css'
import './slick.css'

const URL = 'http://localhost:8080/users'

export const WelcomePage = () => {
  const accessToken = window.localStorage.getItem('accessToken')
  const userId = window.localStorage.getItem('userId')

  const [notAuthorized, setNotAuthorized] = useState(false)
  const [user, setUser] = useState(null)

  const history = useHistory()

  {/* AUTHORIZATION */}

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
        <h3>What type of yoga do you need today?</h3>
      </header>
      <section className="linkSection">
        <Link className="energy" to="/energy">
          Energy boost
          <p className="yogaDescription">A yoga session with poses that will increase your energy and wake you up.</p>
        </Link>
        <Link className="selfconfidence" to="/selfconfidence">
          Self confidence
          <p className="yogaDescription">A yoga session with poses that will make you feel more confident and empowered.</p>
        </Link>
        <Link className="healing" to="/healing">
          Healing
          <p className="yogaDescription">A yoga session with poses that will remove bad energy and increase your self love.</p>
        </Link>
        <Link className="calmdown" to="/calmdown">
          Calm down
          <p className="yogaDescription">A yoga session with poses that will calm you down and ground you.</p>
        </Link>
        <Link className="creativity" to="/creativity">
          Creativity boost
          <p className="yogaDescription">A yoga session with poses that will connect you with your feelings and boost your creativity.</p>
        </Link>
      </section>
      <button onClick={handleLogOut} className="backLink">
        LOG OUT
      </button>
      </body>}
    </>
  )
}