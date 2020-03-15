import React, { useState, useEffect, useParams } from 'react'
import { useHistory } from 'react-router-dom'
import { shuffleAndPick } from '../helpers/shuffleAndPick'

const URL = 'http://localhost:8080/chakra'

export const Creativity = () => {
  const [rootImages, setRootImages] = useState([]);
  const [throatImages, setThroatImages] = useState([]);
  const [solarPlexusImages, setSolarPlexusImages] = useState([]);
  const [sacralImages, setSacralImages] = useState([]);
  const [heartImages, setHeartImages] = useState([]);
  const [thirdEyeImages, setThirdEyeImages] = useState([]);
  const [crownImages, setCrownImages] = useState([]);

  const history = useHistory()

  const fetchRoot = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6132/asana')
      .then (res => res.json())
      .then((json) => { 
        setRootImages(json)
      })
  } 

  const fetchThroat = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6136/asana')
      .then (res => res.json())
      .then((json) => { 
        setThroatImages(json)
      })
  } 

  const fetchSacral = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6133/asana')
      .then (res => res.json())
      .then((json) => { 
        setSacralImages(json)
      })
  } 

  const fetchSolarPlexus = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6134/asana')
      .then (res => res.json())
      .then((json) => { 
        setSolarPlexusImages(json)
      })
  } 

  const fetchHeart = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6135/asana')
      .then (res => res.json())
      .then((json) => { 
        setHeartImages(json)
      })
  } 

  const fetchThirdEye = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6137/asana')
      .then (res => res.json())
      .then((json) => { 
        setThirdEyeImages(json)
      })
  }

  const fetchCrown = () => {
    fetch('http://localhost:8080/chakra/5e6c096afe1b75409f5c6138/asana')
      .then (res => res.json())
      .then((json) => { 
        setCrownImages(json)
      })
  }
     
  useEffect(() => {
    fetchThroat()
    fetchSacral()
    fetchSolarPlexus()
    fetchHeart()
    fetchThirdEye()
    fetchCrown()
    fetchRoot()
  }, [])

  {/* Change the amount of poses per chakra/category here*/} 
  
  const shuffledRoot = shuffleAndPick(rootImages, 1)
  const shuffledThroat = shuffleAndPick(throatImages, 1)
  const shuffledSacral = shuffleAndPick(sacralImages, 2)
  const shuffledSolarPlexus = shuffleAndPick(solarPlexusImages, 1)
  const shuffledHeart= shuffleAndPick(heartImages, 1)
  const shuffledThirdEye= shuffleAndPick(thirdEyeImages, 2)
  const shuffledCrown= shuffleAndPick(crownImages, )

  return (
    <section className="WorkOut">
      <h2>Creativity boost</h2>

      {shuffledRoot.map((image) => (
        <div className="key" key={image.id}>
        <h3>{image.name}</h3>
        <h3>{image.sanskritname}</h3>
        <p>{image.description}</p>
        <img src={image.image} alt={image.name} />
        </div> 
      ))}

      {shuffledThroat.map((image) => (
        <div className="key" key={image.id}>
        <h3>{image.name}</h3>
        <h3>{image.sanskritname}</h3>
        <p>{image.description}</p>
        <img src={image.image} alt={image.name} />
        </div> 
      ))}

      {shuffledSacral.map((image) => (
        <div className="key" key={image.id}>
        <h3>{image.name}</h3>
        <h3>{image.sanskritname}</h3>
        <p>{image.description}</p>
        <img src={image.image} alt={image.name} />
        </div> 
      ))}

      {shuffledSolarPlexus.map((image) => (
        <div className="key" key={image.id}>
        <h3>{image.name}</h3>
        <h3>{image.sanskritname}</h3>
        <p>{image.description}</p>
        <img src={image.image} alt={image.name} />
        </div> 
      ))}

      {shuffledHeart.map((image) => (
        <div className="key" key={image.id}>
        <h3>{image.name}</h3>
        <h3>{image.sanskritname}</h3>
        <p>{image.description}</p>
        <img src={image.image} alt={image.name} />
        </div> 
      ))}

      {shuffledThirdEye.map((image) => (
        <div className="key" key={image.id}>
        <h3>{image.name}</h3>
        <h3>{image.sanskritname}</h3>
        <p>{image.description}</p>
        <img src={image.image} alt={image.name} />
        </div> 
      ))}  
      <button onClick={() => history.goBack()} className="backLink">
        Back
      </button>

    </section>
  )
}