import React, { useState } from "react";
import "./Search.css";
import {
  currentWeatherBaseUrl,
  forecastWeatherBaseUrl,
} from "../../constants/contants";
import axios from "axios";
import Main from "../Main/Main";

const Search = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastWeatherData, setForecastWeatherData] = useState([]);

  console.log(forecastWeatherData);
  const onSubmit = (event) => {
    event.preventDefault();
    const cityInputElement = document.querySelector("#search-input").value;
    const query = `&query=${cityInputElement}`;
    // handles response to grab current weather data
    axios(currentWeatherBaseUrl + query)
      .then((response) => {
        setCurrentWeatherData(response.data);
      })
      .catch((error) => {
        console.log(
          "There was an error retreiving the current weather data",
          error
        );
      });
    // handles response to grab forecast data

    axios(forecastWeatherBaseUrl + query)
      .then((response) => {
        setForecastWeatherData(response.data.daily);
      })
      .catch((error) => {
        console.log("There was an error retreiving the forecast data", error);
      });
  };
  return (
    <div>
      <form className="search-container" onSubmit={onSubmit}>
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Enter a city..."
        />
        <button type="submit" id="submit-btn" className="submit-btn">
          Submit
        </button>
      </form>

      <Main
        currentWeatherData={currentWeatherData ?? null}
        forecastWeatherData={forecastWeatherData ?? null}
      />
    </div>
  );
};

export default Search;
