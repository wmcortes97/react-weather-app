import Main from "./Main";
import { apiKey } from "../apiKey";
import React, { useState } from "react";
import axios from "axios";

function Search() {
  let [city, setCity] = useState("Your City");
  let [temp, setTemp] = useState(0);
  let [wind, setWind] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let cityInput = e.target.elements.cityInput.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response here
        const responseData = response.data;
        setTemp(responseData.main.temp);
        setWind(responseData.wind.speed);
        setCity(responseData.name);
      })
      .catch((error) => {
        // Handle any errors that occur during the API request
        console.error(error);
      });
  };
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input type="text" name="cityInput" placeholder="Type in a city" />
        </label>
        <button type="submit">Search</button>
      </form>
      <Main city={city} temp={temp} wind={wind} />
    </div>
  );
}

export default Search;
