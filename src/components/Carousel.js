import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

export const Carousel = () => {
  const settings = {
    arrows: false,
    infinite: false, // Stannar på sista
    slidesToShow: 1, // visa en åt gången
    slidesToScroll: 1, // scrolla en framåt
    autoplay: true,
    speed: 1000, // speed i själva scrollen
    autoplaySpeed: 7000, // hur länge varje bild visas
    cssEase: "linear"
  };

  // Ist för att lägga alla bilder så här i slider så kan du göra en map eller så.
