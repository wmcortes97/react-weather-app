import Main from "./Main";
import { apiKey } from "../apiKey";
import React, { useState } from "react";
import axios from "axios";

function Search() {
  let [city, setCity] = useState("Your City");
  let [currentWeatherData, setCurrentWeatherData] = useState([]);
  let [forecastData, setForecastData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let cityInput = e.target.elements.cityInput.value;
    let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityInput}&days=7&aqi=no&alerts=no
`;
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response here
        const responseData = response.data;
        console.log(responseData);
        setCity(responseData.location.name);
        setCurrentWeatherData(responseData.current);
        setForecastData(responseData.forecast);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        alert("You typed something wrong, please try again");
        console.error(error);
      });
  };
  return (
    <div className=" theme search-container">
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" name="cityInput" placeholder="Type in a city" />
        </label>
        <button type="submit">Search</button>
      </form>
      <Main city={city} current={currentWeatherData} forecast={forecastData} />
    </div>
  );
}

export default Search;
