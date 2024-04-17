import React from "react";
import "./Main.css";
import { Forecast } from "../Forecast/Forecast";

const Main = ({ data }) => {
  console.log("from main", data);
  const city = data.city;
  const temperature = data.temperature.current;
  const description = data.condition.description;
  const icon = data.condition.icon_url;
  console.log("data reached main", data);
  return (
    <div class="main-container">
      <div class="city-name">{city}</div>
      <div class="current-weather-container">
        <div class="current-temp-container">
          <span class="current-temp">{temperature}</span>
          <div className="unit-container">
            <span> ° </span>
            <span class="unit-f">F</span>
            <span> | </span>
            <span class="unit-c">C</span>
          </div>
        </div>
        <div class="current-temp-icon-container">
          <img src={icon} />
          <div class="current-weather-description">{description}</div>
        </div>
      </div>
      <Forecast />
    </div>
  );
};

export default Main;
