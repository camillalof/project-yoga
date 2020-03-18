import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link, Route } from 'react-router-dom'

import { Nav } from './Nav'

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
      <body>
      <header>
        <h1>Welcome</h1>
        <h2>What do you want to acheive with your workout today?</h2>
      </header>
      <section classname="linkSection" id="linkSection" role="tabpanel" aria-labelledby="linkSection">
        <Link to="/energy">Energy</Link>
        <Link to="/selfconfidence">Self confidence</Link>
        <Link to="/healing">Healing</Link>
        <Link to="/calmdown">Calm down</Link>
        <Link to="/creativity">Creativity</Link>
      </section>
      <button onClick={handleLogOut} className="backLink">
        Log out
      </button>
      </body>}
    </>
  )
}