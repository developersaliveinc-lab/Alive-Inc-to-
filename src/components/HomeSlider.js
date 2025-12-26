import React from "react";
import Slider from "react-slick";
import "./HomeSlider.css";

import slide1 from "../assets/slide1.png"; // your first slide image
import slide2 from "../assets/slide2.png"; // optional more slides

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide" style={{backgroundImage: `url(${slide1})`}}>
          <div className="slide-content">
            <h1>VAMA</h1>
            <p>Global Excellence in Manufacturing and Exporting Life-Saving Pharmaceutical Formulations</p>
          </div>
        </div>
        {/* Add more slides if needed */}
      </Slider>
    </div>
  );
};

export default HomeSlider;
