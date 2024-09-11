import React from "react";
import "../Styles/FooterStyle/styles.css";
import arrow from "../Images/bi_arrow-left (1).png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section">
        <div>
          <span className="head">Xidmətlər</span>
          <ul>
            <li>Transport</li>
            <li>Logistika</li>
            <li>Yükdaşıma</li>
            <li>Xalça yuma</li>
            <li>Karqo Xidməti</li>
          </ul>
          <a href="">
            Hamısına Bax <img src={arrow} alt="" />
          </a>
        </div>
        <div>
          <span className="head">Faydalı Linklər</span>
          <ul>
            <li>Haqqımızda</li>
            <li>Bizim komanda</li>
            <li>Mediada biz</li>
            <li>Bloq</li>
            <li>Tez-tez verilən suallar</li>
            <li>Qalereya</li>
          </ul>
        </div>
        <div className="contact">
          <span className="head">Əlaqə</span>
          <ul>
            <li>
              Ünvan : Yeni Həyat plaza 55 Zərifə Əliyeva, Bakı, Azərbaycan
            </li>
            <li>Əlaqə nömrəsi : +994 (50) 253 46 16</li>
            <li>Elektron poçt : info@166.az</li>
          </ul>
        </div>
      </div>
      <div className="text">
        <span>© 2022 | 166.az | Bütün hüquqlar qorunur166tech.az  </span>
      </div>
    </div>
  );
};

export default Footer;
