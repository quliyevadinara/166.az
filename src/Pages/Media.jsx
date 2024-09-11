import React from "react";
import PageContainer from "../Common/PageContainer";
import CompanyPageNavbar from "../Common/CompanyPageNavbar";
import NewsCard from "../Components/NewsCard";
import { news } from "../Data/newsData";
import Banner from "../Common/Banner";
const Media = () => {
  const newsarr=news.concat(news, news,news);
  const textStyle={
    fontSize:"32px",
    fontWeight:"600",
    lineHeight:"48px",
    color:"#111827",
    fontFamily:"Mulish",
    margin:"3rem",
  }
  return (
    <PageContainer>
      <CompanyPageNavbar />
      <span style={textStyle}>Mediada Biz</span>
      <div className="news-container" style={{margin:"0 3rem"}}>
        <NewsCard data={newsarr} />
      </div>
      <Banner />
    </PageContainer>
  );
};

export default Media;
