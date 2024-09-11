import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsors } from "../../Data/sponsorData";
import "../../Styles/HomeStyle/SponsorSliderStyle/slider.css";

const SponsorSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sponsors.map(sponsor => {
          return (
            <div key={sponsor.id}>
              <img src={sponsor.img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SponsorSlider;
