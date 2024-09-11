import React from "react";
import banner from "../Images/Banner.png";
import "../Styles/BannerStyle/styles.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner} alt="Banner" />
    </div>
  );
};

export default Banner;
