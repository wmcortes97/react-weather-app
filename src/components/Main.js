import { getDate } from "../utils/getDate";
import { getTime } from "../utils/getTime";
function Main() {
  return (
    <div className="date-time-container">
      <h1>City Name</h1>
      <span>
        {getDate()} {getTime()}
      </span>
    </div>
  );
}

export default Main;
