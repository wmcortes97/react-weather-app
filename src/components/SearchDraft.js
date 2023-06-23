// import Main from "./Main";
// import { apiKey } from "../apiKey";
// import React, { useState } from "react";
// import axios from "axios";

// function SearchDraft() {
//   let [city, setCity] = useState("Your City");
//   let [description, setDescription] = useState("");
//   let [temp, setTemp] = useState(0);
//   let [wind, setWind] = useState(0);
//   let [humidity, setHumidity] = useState(0);
//   // let [longitude, setLongitude] = useState(0);
//   // let [latitude, setLatitude] = useState(0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let cityInput = e.target.elements.cityInput.value;
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${apiKey}`;

//     axios
//       .get(apiUrl)
//       .then((response) => {
//         // Handle the API response here
//         const responseData = response.data;
//         console.log(responseData);
//         setTemp(responseData.main.temp);
//         setDescription(responseData.weather[0].description);
//         setWind(responseData.wind.speed);
//         setCity(responseData.name);
//         setHumidity(responseData.main.humidity);
//         // setLongitude(responseData.coord.long);
//         // setLatitude(responseData.coord.lat);

//         let apiWeekUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${responseData.coord.lat}&lon=${responseData.coord.lon}&cnt=7&appid=${apiKey}`;

//         axios
//           .get(apiWeekUrl)
//           .then((weekResponse) => {
//             // Handle the second API response here
//             const weekResponseData = weekResponse.data;
//             console.log(weekResponseData);
//             // Extract the required data from the weekResponseData and update your state accordingly
//           })
//           .catch((error) => {
//             // Handle any errors that occur during the second API request
//             console.error(error);
//           });
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the API request
//         alert("You typed something wrong, please try again");
//         console.error(error);
//       });
//   };
//   return (
//     <div className=" theme search-container">
//       <form onSubmit={handleSubmit}>
//         <label>
//           City:
//           <input type="text" name="cityInput" placeholder="Type in a city" />
//         </label>
//         <button type="submit">Search</button>
//       </form>
//       <Main
//         description={description}
//         city={city}
//         temp={temp}
//         wind={wind}
//         humidity={humidity}
//       />
//     </div>
//   );
// }

// export default SearchDraft;
