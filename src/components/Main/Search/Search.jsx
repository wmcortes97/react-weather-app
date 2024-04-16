import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div class="search-container">
      <input
        type="text"
        id="search-input"
        class="search-input"
        placeholder="Enter a city..."
      />
      <input type="submit" id="submit-btn" class="submit-btn" value="submit" />
    </div>
  );
};

export default Search;
