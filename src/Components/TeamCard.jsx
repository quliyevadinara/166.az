import React from "react";
import "../Styles/TeamCardStyle/styles.css";
const TeamCard = ({ data }) => {
  return (
    <div className="team-container">
      {data.map((item) => {
        const { id, imgSrc, title, desc } = item;
        return (
          <div key={id} className="card">
            <div className="card-image">
              <img src={imgSrc} />
            </div>
            <div className="card-info">
              <span className="title">{title}</span>
              <span className="desc">{desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
