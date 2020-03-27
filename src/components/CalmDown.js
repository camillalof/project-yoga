import React, { useState, useEffect, useParams } from 'react'
import Slider from "react-slick";
import { useHistory } from 'react-router-dom'
import { shuffleAndPick } from '../helpers/shuffleAndPick'

import './calmdown.css'

const URL = 'http://https://api-project-yoga-poses.herokuapp.com/users'

export const CalmDown = () => {
  const [rootImages, setRootImages] = useState([]);
  const [throatImages, setThroatImages] = useState([]);
  const [solarPlexusImages, setSolarPlexusImages] = useState([]);
  const [sacralImages, setSacralImages] = useState([]);
  const [heartImages, setHeartImages] = useState([]);
  const [thirdEyeImages, setThirdEyeImages] = useState([]);
  const [crownImages, setCrownImages] = useState([]);
  
  const [startPoseImage, setStartPoseImage] = useState([]);
  const [finishPoseImage, setFinishPoseImage] = useState([]);

  const accessToken = window.localStorage.getItem('accessToken')
  const userId = window.localStorage.getItem('userId')

  const [notAuthorized, setNotAuthorized] = useState(false)
  const [user, setUser] = useState(null)

  const history = useHistory()

  {/* AUTHORIZATION */}

  useEffect(() => {
    fetch(`${URL}/${userId}`, {
    method: 'GET', 
    headers: {
      Authorization: accessToken
    }
  })
  .then()
  .then((user) => {
    if (user.loggedOut) {
      setNotAuthorized(true)
    } else {
      setUser(user)
    }
  })
  .catch((err) => {
    setNotAuthorized(true)
  })
  }, [userId, accessToken])

  const handleLogOut = () => {
    history.push('/login') //return to login page
    window.localStorage.clear() // clears data
    setNotAuthorized(true)
    console.log('accessToken')
  }

  {/* FETCH POSES */}

  const fetchRoot = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e07f/asana')
      .then (res => res.json())
      .then((json) => { 
        setRootImages(json)
      })
  } 
  const fetchThroat = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e083/asana')
      .then (res => res.json())
      .then((json) => { 
        setThroatImages(json)
      })
  } 
  const fetchSacral = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e080/asana')
      .then (res => res.json())
      .then((json) => { 
        setSacralImages(json)
      })
  } 
  const fetchSolarPlexus = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e081/asana')
      .then (res => res.json())
      .then((json) => { 
        setSolarPlexusImages(json)
      })
  } 
  const fetchHeart = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e082/asana')
      .then (res => res.json())
      .then((json) => { 
        setHeartImages(json)
      })
  } 
  const fetchThirdEye = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e084/asana')
      .then (res => res.json())
      .then((json) => { 
        setThirdEyeImages(json)
      })
  }
  const fetchCrown = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/chakra/5e7b66a7b6175e709aa0e085/asana')
      .then (res => res.json())
      .then((json) => { 
        setCrownImages(json)
      })
  }
  const fetchStartPose = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/asana/5e7b66a7b6175e709aa0e0af')
      .then (res => res.json())
      .then((json) => { 
        setStartPoseImage(json)
      })
  }
  const fetchFinishPose = () => {
    fetch('http://https://api-project-yoga-poses.herokuapp.com/asana/5e7b66a7b6175e709aa0e0b0')
      .then (res => res.json())
      .then((json) => { 
        setFinishPoseImage(json)
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

    fetchStartPose()
    fetchFinishPose()
  }, [])

  {/* Change the amount of poses per chakra/category here*/} 
  
  const shuffledRoot = shuffleAndPick(rootImages, 3)
  const shuffledThroat = shuffleAndPick(throatImages, 1)
  const shuffledSacral = shuffleAndPick(sacralImages, )
  const shuffledSolarPlexus = shuffleAndPick(solarPlexusImages, 1)
  const shuffledHeart= shuffleAndPick(heartImages, 3)
  const shuffledThirdEye= shuffleAndPick(thirdEyeImages, )
  const shuffledCrown= shuffleAndPick(crownImages, )

  const startPose = startPoseImage
  const finishPose = finishPoseImage

  const finalPoses = [];

  {/* Push into finalPoses array here*/} 
  

  finalPoses.push(startPose);

  shuffledRoot.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });
  shuffledThroat.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });
  shuffledSacral.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });
  shuffledSolarPlexus.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });
  shuffledHeart.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });
  shuffledThirdEye.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });
  shuffledCrown.forEach(pose => {
    finalPoses.push(pose);
    if (pose.repeat) {
      finalPoses.push({ ...pose, extraMessage: "Change side!" });
    }
  });

  finalPoses.push(finishPose);  

  console.log("final", finalPoses);  

  {/* Settings for carousel here */} 

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "black", right: "10%" }}
        onClick={onClick}
      />
    );
  }
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "black", left: "10%" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    accessibility: true,
    arrows: true,
    centerPadding: 0,
    infinite: false, // Stannar på sista
    slidesToShow: 1, // visa en åt gången
    slidesToScroll: 1, // scrolla en framåt
    autoplay: true,
    speed: 1000, // speed i själva scrollen
    autoplaySpeed: 7000, // hur länge varje bild visas
    adaptiveHeight: true,
    className: "center",
    centerMode: true,
    useCSS: true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />
  } 

  return (
    <> 
    <div className="carouselContainer">
      {notAuthorized && 
        <span className='memberSection'> 'You are not authorized' </span>}
      {!notAuthorized && 
      <Slider {...settings}>
        {finalPoses.map((image) => {
          return (
          <div className="poses" key={image.id}>
            <span className="poseTitle">
              <h3>{image.name}</h3>
              <h4>{image.sanskritname}</h4>
            </span>
            <span className="imageContainer">
              <img src={image.image} alt={image.name} />
            </span>
              <p className="description">{image.description}</p>
              <p className="extraMessage">{image.extraMessage}</p> 
              <button onClick={() => history.goBack()} className="backLink">
              LOG OUT
              </button>
            </div>  
          )  
        })}
      </Slider>}
    </div>
    </>  
  )
}
    