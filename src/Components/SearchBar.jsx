import React from "react";
import "./SearchBar.css";

function SearchBar({ onInputChange, onSearchClick }) {
  return (
    <div className="search">
      <input onInput={onInputChange} className="search-term" type="text" />
      <button onClick={onSearchClick} className="search-button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
}
export default SearchBar;
