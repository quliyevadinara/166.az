import React from "react";
import { services } from "../../Data/servicesData";
import "../../Styles/HomeStyle/ServicesHomeStyle/styles.css";
import stroke from "../../Images/Stroke 2 (2).png";
import vector from "../../Images/Vector.png";
import arrow from "../../Images/bi_arrow-left.png";
const ServicesH = () => {
  return (
    <div className="servicesHome-container">
      <div className="head-text">
        <h1>Xidmətlər</h1>
        <a href="">Hamısına Bax <img src={arrow} alt="" /></a>
      </div>
      <div className="container">
        {services.map((service) => {
          const { id, icon, title, descripton } = service;
          return (
            <div key={id} className="serviceHome-box">
              <img className="icon" src={icon} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>{descripton}</p>
              </div>
              <img className="stroke" src={stroke} alt="" />
              <a href="">
                <img src={vector} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesH;
