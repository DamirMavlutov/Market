import React from "react";
import Slider from "react-slick";

const MyCarousel = ({ card }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>{card}</h3>
      </div>
      <div>
        <h3>{card}</h3>
      </div>
      <div>
        <h3>{card}</h3>
      </div>
      <div>
        <h3>{card}</h3>
      </div>
      <div>
        <h3>{card}</h3>
      </div>
      <div>
        <h3>{card}</h3>
      </div>
    </Slider>
  );
};

export default MyCarousel;
