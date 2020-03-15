import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { randomizer } from '../helpers/randomizer'

import './WorkOut.css'

const URL = 'http://localhost:8080/chakra'

export const WorkOut = () => {
  const [images, setImages] = useState([]);

  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:8080/asana')
    .then (res => res.json())
    .then(json => setImages(json))
  }, []);

  console.log(randomizer(images))
  
  return (
    <section className="WorkOut">

      <h2>Work out</h2>
      {images.map((images) => (
        <div className="key" key={images.id}>
        <h3>{images.name}</h3>
        <h3>{images.sanskritname}</h3>
        <p>{images.description}</p>
        <img src={images.image} alt={images.name} />
        </div> 
      ))}  
      <button onClick={() => history.goBack()} className="backLink">
        Back
      </button>

    </section>
  )
}