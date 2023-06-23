import React from "react";

const WeatherIcon = ({ condition }) => {
  let iconPath;

  switch (condition) {
    case "sunny":
      iconPath = require("./icons/sunny.svg").default;
      break;
    case "cloudy":
      iconPath = require("./icons/cloudy.svg").default;
      break;
    case "rainy":
      iconPath = require("./icons/rainy.svg").default;
      break;
    // Add more cases for other weather conditions

    default:
      iconPath = require("./icons/default.svg").default;
      break;
  }

  return (
    <div>
      <img src={iconPath} alt={condition} />
    </div>
  );
};

export default WeatherIcon;
