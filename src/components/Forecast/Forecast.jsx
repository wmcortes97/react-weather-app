import React from "react";
import "./Forecast.css";
import { getDate } from "../../utils/utils";

export const Forecast = ({ data }) => {
  const { nextSevenDays } = getDate();
  console.log(nextSevenDays);
  return (
    <div className="forecast-container">
      {data != null ? (
        data.map((dailyForecast, index) => {
          return (
            <div className="forecast-day-container">
              <div>{nextSevenDays[index]}</div>
              <img src={dailyForecast?.condition?.icon_url} />
              <span>
                {dailyForecast?.temperature?.minimum} /
                {dailyForecast?.temperature?.maximum}
              </span>
              {/* <div>{dailyForecast?.condition?.description}</div> */}
            </div>
          );
        })
      ) : (
        <div> There is no forecast data</div>
      )}
    </div>
  );
};
