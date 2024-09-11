import React from "react";
import PageContainer from "../Common/PageContainer";
import CompanyPageNavbar from "../Common/CompanyPageNavbar";
import TeamCard from "../Components/TeamCard";
import {teamData} from "../Data/teamData";
import LocationPath from "../Common/LocationPath";
const OurTeam = () => {
  const textStyle = {
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "48px",
    color: "#111827",
    fontFamily: "Mulish",
    padding: "3rem",
  };
  return (
    <PageContainer>
      <LocationPath />
      <CompanyPageNavbar />
      <span style={textStyle}>Komandamız</span>
      <div className="news-container" style={{ margin: "0 3rem" }}>
        <TeamCard data={teamData}/>
      </div>
    </PageContainer>
  );
};

export default OurTeam;
