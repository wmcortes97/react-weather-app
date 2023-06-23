import { getDate } from "../utils/getDate";
import { getTime } from "../utils/getTime";
import Week from "./Week";

function Main({ city, current, forecast }) {
  const currentTemp = current.temp_f;
  const humidity = current.humidity;
  const wind = current.wind_mph;
  const description = current.condition.text;

  return (
    <div className="theme main-container">
      <h2>{city}</h2>
      <span className="font-theme">
        {getDate()} {getTime()}
      </span>
      <h1>{currentTemp}°F</h1>
      <h2>{description}</h2>

      <div className="font-theme">
        humidity:{humidity} || wind:{wind} mph
      </div>
      <Week forecastData={forecast} />
    </div>
  );
}

export default Main;
