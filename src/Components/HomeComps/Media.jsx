import React from "react";
import arrow from "../../Images/bi_arrow-left.png";
import NewsCard from "../NewsCard";
import newsBanner from "../../Images/Banner - news.png";
import {news} from "../../Data/newsData";
import "../../Styles/HomeStyle/MediaHome/styles.css";
const Media = () => {
  return (
    <div className="media-container">
      <div className="head-text">
        <h1>Mediada Biz</h1>
        <a href="">
          Hamısına Bax <img src={arrow} alt="" />
        </a>
      </div>
      <div className="news-banner">
        <img src={newsBanner} alt="News Banner" />
      </div>
      <NewsCard data={news} />
    </div>
  );
};

export default Media;
