import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './signup.css'

const URL = 'http://localhost:8080/users'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  // To sign up a user.
  const handleSubmit = event => {
    event.preventDefault()

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log('error:', err))
}
  
  return (
    <article className="signUpContainer">
      <h2>Sign up</h2>
      <section className="formSection">
        <form onSubmit={handleSubmit}>
            <input
              required
              value={name}
              placeholder='Name' 
              type='name'
              name='name'
              onChange={event => setName(event.target.value)}
            />
            <input
              required
              value={email}
              placeholder='Email' 
              type='email'
              name='email'
              onChange={event => setEmail(event.target.value)}
            />
            <input
              required
              value={password}
              placeholder='Password' 
              onChange={event => setPassword(event.target.value)}
              type='password'
              name='password'
            />
          <button className="submitSignUp" type='submit' onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
      <section className="backLink">
        <button onClick={() => history.goBack()} className="backLink">
          Back
        </button>
      </section>  
      </section>
      </article>
  )
}