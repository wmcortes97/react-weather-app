import React from "react";
import "./Main.css";
import { Forecast } from "../Forecast/Forecast";

const Main = ({ currentWeatherData, forecastWeatherData }) => {
  // items from currentWeatherData
  const city = currentWeatherData.city;
  const temperature = currentWeatherData?.temperature?.current ?? null;
  const description = currentWeatherData?.condition?.description ?? null;
  const icon = currentWeatherData?.condition?.icon_url ?? null;

  return (
    <div className="main-container">
      <div className="city-name">{city}</div>
      <div className="current-weather-container">
        <div className="current-temp-container">
          <span className="current-temp">{temperature}</span>
          <div className="unit-container">
            <span> ° </span>
            <span className="unit-f">F</span>
            <span> | </span>
            <span className="unit-c">C</span>
          </div>
        </div>
        <div className="current-temp-icon-container">
          <img src={icon} />
          <div className="current-weather-description">{description}</div>
        </div>
      </div>
      <Forecast data={forecastWeatherData ?? null} />
    </div>
  );
};

export default Main;
