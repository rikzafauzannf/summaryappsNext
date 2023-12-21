"use client";
import React from "react";
import Slider from "react-slick";

export default function MySlide({ children }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return <Slider {...settings}>{children}</Slider>;
}
