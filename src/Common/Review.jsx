import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../Data/reviewsData";
import "../Styles/ReviewStyle/styles.css";
const Review = ({ desc }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {desc && (
        <div className="head-container">
          <div>
            <span className="head">Müştəri rəyləri</span>
            <span className="title">
              Lorem Ipsum Dolor Sit Amet Consectetur. Magna Tellus Nibh Lectus
              Congue Amet.{" "}
            </span>
          </div>
          <div className="total">
            <span className="total-1">Total Reviews</span>
            <span className="total-2">122 K</span>
          </div>
        </div>
      )}
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="img-num">
              <img src={review.imgSrc} alt="" />
              <span>01</span>
            </div>
            <div className="review-details">
              <div className="review-rating">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p>{review.review}</p>
              <span>{review.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
