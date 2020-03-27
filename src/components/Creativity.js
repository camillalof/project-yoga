import React, { useState, useEffect, useParams } from 'react'
import Slider from "react-slick";
import { useHistory } from 'react-router-dom'
import { shuffleAndPick } from '../helpers/shuffleAndPick'

const URL = 'http://https://api-project-yoga-poses.herokuapp.com/chakra'

export const Creativity = () => {
  const [rootImages, setRootImages] = useState([]);
  const [throatImages, setThroatImages] = useState([]);
  const [solarPlexusImages, setSolarPlexusImages] = useState([]);
  const [sacralImages, setSacralImages] = useState([]);
  const [heartImages, setHeartImages] = useState([]);
  const [thirdEyeImages, setThirdEyeImages] = useState([]);
  const [crownImages, setCrownImages] = useState([]);

  const [startPoseImage, setStartPoseImage] = useState([]);
  const [finishPoseImage, setFinishPoseImage] = useState([]);

  const history = useHistory()

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
  
  const shuffledRoot = shuffleAndPick(rootImages, 1)
  const shuffledThroat = shuffleAndPick(throatImages, 1)
  const shuffledSacral = shuffleAndPick(sacralImages, 2)
  const shuffledSolarPlexus = shuffleAndPick(solarPlexusImages, 1)
  const shuffledHeart= shuffleAndPick(heartImages, 1)
  const shuffledThirdEye= shuffleAndPick(thirdEyeImages, 2)
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

  const settings = {
    arrows: true,
    infinite: false, // Stannar på sista
    slidesToShow: 1, // visa en åt gången
    slidesToScroll: 1, // scrolla en framåt
    autoplay: true,
    speed: 1000, // speed i själva scrollen
    autoplaySpeed: 7000, // hur länge varje bild visas
    adaptiveHeight: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
  } 

  return (
    <div className="carouselContainer">
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
                  Back
                </button>
            </div>  
          )  
        })}
      </Slider>
    </div>
  )
}
   