import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiCreditCard } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import "../Styles/HeaderStyle/header.css";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import SearchInput from "../Common/SearchInput";
const Header = () => {
  return (
    <div className="header-container">
      <div className="topbar">
        <div className="topbar-buttons">
          <button className="button-1">Fərdi müştərilər</button>
          <button className="button-2">Korporativ Müştərilər</button>
        </div>
        <div className="topbar-onlinePay-lang">
          <div className="online-pay">
            <span className="creditCard-icon">
              <PiCreditCard />
            </span>
            <span className="online-pay-text">Onlayn ödəniş</span>
          </div>
          <div className="lang-sec">
            <ul>
              <li className="en-lang">
                <span>Eng</span>
                <span>
                  <MdKeyboardArrowDown className="icon" />
                </span>
                <ul>
                  <li>Aze</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar">
        <Link to={"/"}>
          <div className="header-img">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div>
          <SearchInput />
        </div>
        <div className="navbar-sec">
          <Link to={"/"} className="navbar-link">
            Əsas Səhifə
          </Link>
          <Link to={"/"} className="navbar-link company-link">
            <span>Şirkətimiz</span>
            <span>
              <MdKeyboardArrowDown className="icon" />
            </span>
            <div className="dropdown-content">
              <Link to={"/haqqımızda"}>Haqqımızda</Link>
              <Link to={"/komandamız"}>Komandamız</Link>
              <Link to={"/media"}>Mediada Biz</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/faq"}>Tez-tez verilən suallar</Link>
              <Link to={"/qalereya"}>Qalereya</Link>
            </div>
          </Link>
          <Link to={"/"} className="navbar-link">
            <span>Xidmətlərimiz</span>
            <span>
              <MdKeyboardArrowDown className="icon" />
            </span>
          </Link>
          <Link to={"/"} className="navbar-link">
            <span>Blog</span>
            <span>
              <MdKeyboardArrowDown className="icon" />
            </span>
          </Link>
          <Link to={"/"} className="navbar-link">
            <span>Əlaqə</span>
          </Link>
          <button className="call-button">
            <FiPhone />
            <span>Book a call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
