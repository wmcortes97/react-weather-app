import { getDate } from "../utils/getDate";
import { getTime } from "../utils/getTime";
function Main({ city }) {
  return (
    <div className="date-time-container">
      <h1>{city}</h1>
      <span>
        {getDate()} {getTime()}
      </span>
      <div>raining || humidity || wind</div>
    </div>
  );
}

export default Main;
