import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const URL = 'http://localhost:8080/users'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  // To sign up a user.
  const handleSubmit = event => {
    event.preventDefault()

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ name, password }),
    headers: { 'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log('error:', err))
}
  
  return (
    <section className="SignUp">
      <section className="backLink">
        <button onClick={() => history.goBack()} className="backLink">
          Back
        </button>
      </section>
      <section className="formSection">
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <label>
            name
            <input
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </label>
          <label>
            password
            <input
              required
              value={password}
              onChange={event => setPassword(event.target.value)}
              type='password'
            />
          </label>
          <button type='submit' onClick={handleSubmit}>
            SIGN UP
          </button>
        </form>
      </section>
      </section>
  )
}