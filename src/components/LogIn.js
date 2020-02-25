import React from 'react'
import { Link } from 'react-router-dom'

export const LogIn = () => {
  return (
    <section className="Login">
      <h2>Login</h2>
      <p>
        <Link to="/signup">Sign up</Link>
      </p>
    </section>
  )
}