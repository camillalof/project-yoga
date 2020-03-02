import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

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

  /** LOG OUT FUNCTION-MOVE TO NAVBAR
   * const handleLogOut = () => {
    history.push('/') //return to start page
    window.localStorage.clear() // clears data
  }**/
  
  return (
    <>
    {notAuthorized && 
      <div className='memberSection'> 'You are not authorized' </div>}

    {!notAuhorized && 
      <h2>Welcome</h2>
      <h3>Secret message!</h3>

    <button onClick={() => history.goBack()} className="backLink">
      Back
    </button>
    </>

  )
}