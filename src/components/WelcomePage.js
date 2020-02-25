import React from 'react'
import { useHistory } from 'react-router-dom'

export const WelcomePage = () => {
  const history = useHistory()
  
  return (
    <section className="WelcomePage"> 
      <h2>Welcome</h2>
      <button onClick={() => history.goBack()} className="backLink">
        Back
      </button>
    </section>
  )
}