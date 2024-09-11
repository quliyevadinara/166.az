import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Styles/LocationStyle/styles.css";

const LocationPath = () => {
  const location = decodeURIComponent(useLocation().pathname);
  let locationArray = location.split("/").slice(1);
  return (
    <div className="navbar-path">
      <NavLink to="/">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_594_143)">
            <path
              d="M7.54916 0.533177C8.38719 -0.173819 9.61281 -0.173819 10.4508 0.533177L17.2008 6.22772C17.7076 6.65523 18 7.28447 18 7.94747V17.7504C18 18.7169 17.2165 19.5004 16.25 19.5004H13.25C12.2835 19.5004 11.5 18.7169 11.5 17.7504V12.7504C11.5 12.3362 11.1642 12.0004 10.75 12.0004H7.25C6.83579 12.0004 6.5 12.3362 6.5 12.7504V17.7504C6.5 18.7169 5.7165 19.5004 4.75 19.5004H1.75C0.783502 19.5004 0 18.7169 0 17.7504V7.94747C0 7.28447 0.292405 6.65523 0.799155 6.22772L7.54916 0.533177Z"
              fill="#242424"
            />
          </g>
          <defs>
            <clipPath id="clip0_594_143">
              <rect width="18" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </NavLink>
      {locationArray.map((item, index) => (
        <div key={index} className="path">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 12.75L11.25 9L7.5 5.25"
              stroke="#242424"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <NavLink
            className="path-link"
            to={"/" + locationArray.slice(0, index + 1).join("/")}>
            <span
              className={index === locationArray.length - 1 ? "last-path" : ""}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default LocationPath;
