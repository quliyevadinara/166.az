import React from "react";
import { vehicles } from "../../Data/vehiclesData";
import "../../Styles/HomeStyle/VehiclesStyle/styles.css";

const CarPark = () => {
  return (
    <div className="container">
      <span>Bizim avtopark</span>
      <div className="container-box">
        {vehicles.map((vehicle) => {
          return (
            <div className="vehicle-card" key={vehicle.id}>
              <h3>{vehicle.type}</h3>
              <p>
                {vehicle.length} / {vehicle.weight}
              </p>
              <img src={vehicle.imgSrc} alt="Vehicle" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarPark;
