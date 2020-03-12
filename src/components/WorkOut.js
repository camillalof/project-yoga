import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import './WorkOut.css'

const URL = 'http://localhost:8080/asana'

export const WorkOut = () => {
  const [images, setImages] = useState([]);

  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:8080/asana')
    .then (res => res.json())
    .then(json => setImages(json))
  }, []);


  
  return (
    <section className="WorkOut">

      <h2>Work out</h2>
      {images.map((images) => (
        <div className="key">key={images.id} 
        <img src={images.image} alt={images.name} />
        <h3>{images.name}</h3>
        </div> 
      ))}  
      <button onClick={() => history.goBack()} className="backLink">
        Back
      </button>

    </section>
  )
}