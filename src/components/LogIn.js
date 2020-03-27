import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

import './login.css'

const URL = 'http://localhost:8080/sessions'

export const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)

  const history = useHistory()

  const handleFormSubmit = event => {
    event.preventDefault()
  
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email: email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(user => {
        console.log(user)
          if (user.message) {
            setErrorMsg(user.message)
          } else {
            window.localStorage.setItem('userId', user.userId)
            window.localStorage.setItem('accessToken', user.accessToken)
            history.push('/Welcome')
          }
      })
      .catch(err => console.log('error:', err))
  }

  return (
    <article className="loginContainer">
      <h2>Yoga</h2>
      <form className='loginForm' onSubmit={handleFormSubmit}>
          <div className='loginContainer'>
            <input 
              value={email} 
              placeholder='Email' 
              type='email'
              name='email'
              onChange={event => { setEmail(event.target.value) }} 
              required>
            </input>
            <input value={password}
              placeholder='Password' 
              type='password'
              name='password'
              onChange={event => { setPassword(event.target.value) }} 
              required>
            </input>
              {errorMsg && <div className='error-message'> {errorMsg} </div>}
                {/* <label>Reset password here</label> */}
            <button className="signInButton"onClick={handleFormSubmit} type="submit">LOG IN</button>
            </div>
      </form>
        <section className="signUp">
          <p>Not a member yet?</p>
          <button className="signUpLink">
            <Link to="/signup"> SIGN UP HERE</Link>
          </button>    
        </section>  
    </article>
  )
}