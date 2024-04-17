import React, { useState } from "react";
import "./Search.css";
import { currentWeatherBaseUrl } from "../../../constants/contants";
import axios from "axios";
import Main from "../Main/Main";

const Search = () => {
  const [data, setData] = useState({});
  console.log(data);
  const onSubmit = () => {
    const cityInputElement = document.querySelector("#search-input").value;

    axios(currentWeatherBaseUrl + `&query=${cityInputElement}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("There was an error retreiving the response", error);
      });
  };
  return (
    <div>
      <div class="search-container">
        <input
          type="text"
          id="search-input"
          class="search-input"
          placeholder="Enter a city..."
        />
        <button
          type="submit"
          id="submit-btn"
          class="submit-btn"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
      <Main data={data} />
    </div>
  );
};

export default Search;
