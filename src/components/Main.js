import { getDate } from "../utils/getDate";
import { getTime } from "../utils/getTime";
import Week from "./Week";

function Main({ city, description, temp, wind, humidity }) {
  return (
    <div className="theme main-container">
      <h2>{city}</h2>
      <span className="font-theme">
        {getDate()} {getTime()}
      </span>
      <h1>{temp}°F</h1>
      <h2>{description}</h2>

      <div className="font-theme">
        humidity:{humidity} || wind:{wind} mph
      </div>
      <Week />
    </div>
  );
}

export default Main;
