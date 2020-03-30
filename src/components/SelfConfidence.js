import React, { useState, useEffect, useParams } from 'react'
import Slider from "react-slick";
import { useHistory } from 'react-router-dom'
import { shuffleAndPick } from '../helpers/shuffleAndPick'

const URL = 'http://https://api-project-yoga-poses.herokuapp.com/chakra'

export const SelfConfidence = () => {
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

  const history = useHistory()

  {/* FETCH POSES */}

  const fetchRoot = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b684048c002389b762/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setRootImages(json)
      })
  } 
  const fetchThroat = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b784048c002389b766/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setThroatImages(json)
      })
  } 
  const fetchSacral = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b784048c002389b763/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setSacralImages(json)
      })
  } 
  const fetchSolarPlexus = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b784048c002389b764/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setSolarPlexusImages(json)
      })
  } 
  const fetchHeart = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b784048c002389b765/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setHeartImages(json)
      })
  } 
  const fetchThirdEye = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b784048c002389b767/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setThirdEyeImages(json)
      })
  }
  const fetchCrown = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/chakra/5e8248b784048c002389b768/asana', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
        setCrownImages(json)
      })
  }
  const fetchStartPose = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/asana/5e8248b884048c002389b792', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }   
    })
      .then (res => res.json())
      .then(json => { 
        setStartPoseImage(json)
      })
  }
  const fetchFinishPose = () => {
    fetch('https://api-project-yoga-poses.herokuapp.com/asana/5e8248b884048c002389b793', {
      method: 'GET',
      headers: {
        Authorization: accessToken
      }
    })
      .then (res => res.json())
      .then(json => { 
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

  {/* Change the amount of poses per chakra/category here. And remember to correct in under return*/} 
  
  const shuffledRoot = shuffleAndPick(rootImages, 2)
  const shuffledThroat = shuffleAndPick(throatImages, 1)
  const shuffledSacral = shuffleAndPick(sacralImages, 1)
  const shuffledSolarPlexus = shuffleAndPick(solarPlexusImages, 2)
  const shuffledHeart= shuffleAndPick(heartImages, 2)
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
  prevArrow: <SamplePrevArrow/>
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
 