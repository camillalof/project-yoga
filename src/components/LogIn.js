import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

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
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(user => {
          if (user['message']) {
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
    <section className="Login">
      <h2>Login</h2>
      <form className='loginForm' onSubmit={handleFormSubmit}>
          <div className='loginContainer'>
            <label >Username/Email  </label>
            <input 
              value={email} 
              placeholder='Enter Email' 
              type='email'
              onChange={event => { setEmail(event.target.value) }} 
              required>
            </input>
            <label>Password</label>
            <input value={password}
              placeholder='Enter Password' 
              type='password'
              onChange={event => { setPassword(event.target.value) }} 
              required>
            </input>
              {errorMsg && <div className='error-message'> {errorMsg} </div>}
                {/* <label>Reset password here</label> */}
            <button onClick={handleFormSubmit} type="submit">Login</button>
            </div>
            </form>
      <p>
        <Link to="/signup">Sign up</Link>
      </p>
    </section>
  )
}