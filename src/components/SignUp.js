import React from 'react'
import { useHistory } from 'react-router-dom'

export const SignUp = () => {
  const history = useHistory()
  
  return (
    <section className="SignUp">
      <h2>Sign up</h2>
      <button onClick={() => history.goBack()} className="backLink">
        Back
      </button>
    </section>
  )
}