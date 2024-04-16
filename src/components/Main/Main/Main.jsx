import React from "react";
import { Forecast } from "./Forecast/Forecast";
import "./Main.css";

const Main = () => {
  return (
    <div class="main-container">
      <div class="city-name">Los Angeles</div>
      <div class="current-weather-container">
        <div class="current-temp-container">
          <span class="current-temp">80°</span>
          <div className="unit-container">
            <span class="unit-f">F</span>
            <span> | </span>
            <span class="unit-c">C</span>
          </div>
        </div>
        <div class="current-temp-icon-container">
          <div class="current-weather-icon">sun icon here</div>
          <div class="current-weather-description">sunny description</div>
        </div>
      </div>
      <Forecast />
    </div>
  );
};

export default Main;
