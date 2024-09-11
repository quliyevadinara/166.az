import React from "react";
import "../Styles/NewsCardStyle/styles.css";
const NewsCard = ({ data }) => {
  return (
    <div className="news-container">
      {data.map((news) => {
        const { id, imgSrc, date, title, description } = news;
        return (
          <div key={id} className="news-card">
            <img src={imgSrc} alt="News" />
            <div className="text">
              <span className="date">{date}</span>
              <span className="title">{title}</span>
              <span className="desc">{description.slice(0, 90)}...</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
