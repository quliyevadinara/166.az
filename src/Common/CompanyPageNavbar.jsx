import React from "react";
import { Link } from "react-router-dom";
import "../Styles/CompanyStyle/styles.css";
const CompanyPageNavbar = () => {
  return (
    <div className="navbar">
      <Link to={"/haqqımızda"}>Haqqımızda</Link>
      <Link to={"/komandamız"}>Komandamız</Link>
      <Link to={"/media"}>Mediada Biz</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/faq"}>Tez-tez verilən suallar</Link>
      <Link to={"/qalereya"}>Qalereya</Link>
    </div>
  );
};

export default CompanyPageNavbar;
