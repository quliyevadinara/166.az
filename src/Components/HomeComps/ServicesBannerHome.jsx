import React from "react";
import { locations } from "../../Data/locationsData";
import "../../Styles/HomeStyle/ServicesBannerH/styles.css";
import frame from "../../Images/Frame 3895.png";
import car from "../../Images/image 10.png";
const ServicesBannerHome = () => {
  return (
    <div className="servicesBannerHome-container">
      <span className="head-text">
        Lorem ipsum dolor sit amet consectetur. <span>Magna</span> tellus nibh
        lectus congue amet.
      </span>
      <div className="locatons-sec">
        {locations.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.flag} alt="Flag" />
              <span>{item.countryName}</span>
            </div>
          );
        })}
      </div>

      <div className="services-banner">
        <div className="banner-1">
          <span>Xidmətlərimiz</span>
          <img src={frame} alt="" />
          <img className="car-img" src={car} alt="" />
        </div>
        <div className="banner-2">
          <span>Partnyorlar</span>
          <img src={frame} alt="" />
        </div>
        <div className="banner-3">
          <div className="small-banner">
            <span>Haqqımızda</span>
            <img className="img-1" src={frame} alt="" />
          </div>
          <div className="small-banner-2">
            <span>Müştəri rəyləri</span>
            <img className="img-2" src={frame} alt="" />
          </div>
        </div>
      </div>

      <div className="customer-sec">
        <div className="section-text">
          <span className="title">Lorem ipsum dolor sit amet consectetur</span>
          <span className="description">
            A videoconference was held with the participation of the acting
            chairman of the Customs Cooperation Council of the World A
            videoconference was held with the participation of the acting
            chairman of the Customs Cooperation Council of the World
          </span>
        </div>
        <div className="box-container">
          <div className="box">
            <div className="box-details">
              <div className="title">
                <span>25</span> +
              </div>
              <span>Lorem Ipsum</span>
            </div>
          </div>
          <div className="box">
            <div className="box-details">
              <div className="title">
                <span>105K</span> +
              </div>
              <span>Lorem Ipsum</span>
            </div>
          </div>
          <div className="box">
            <div className="box-details">
              <div className="title">
                <span>20</span> +
              </div>
              <span>Lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBannerHome;
