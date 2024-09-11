import React from "react";
import mapimg from "../../Images/Map (1).png";
import "../../Styles/HomeStyle/MapStyle/styles.css";
const Map = () => {
  return (
    <div className="map-container">
      <span>Fəaliyyət göstərdiyimiz ölkələr</span>
      <div>
        <img src={mapimg} alt="" />
      </div>
    </div>
  );
};

export default Map;
