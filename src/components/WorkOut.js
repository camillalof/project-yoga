import React from 'react'
import { useHistory } from 'react-router-dom'

export const WorkOut = () => {
  const history = useHistory()
  
  return (
    <section className="WorkOut">
      <h2>Work out</h2>
      <button onClick={() => history.goBack()} className="backLink">
        Back
      </button>
    </section>
  )
}