import React from "react";
import { IoSearch } from "react-icons/io5";
import "../Styles/SearchInputStyle/styles.css";
const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" />
      <div className="search-text">
        <span className="icon">
        <IoSearch />
        </span>
        <span>Search</span>
      </div>
    </div>
  );
};

export default SearchInput;
