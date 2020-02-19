import React from "react";
import "./SearchBar.css";

function SearchBar({ onInputChange, onSearchClick }) {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      onSearchClick();
    }
  };
  return (
    <div className="search">
      <input
        onInput={onInputChange}
        onKeyPress={handleKeyPress}
        className="search-term"
        type="text"
      />
      <button onClick={onSearchClick} className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
export default SearchBar;
