import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastFuture from "./WeatherForecastFuture";

export default function WeatherForecast(props) {
  let [loaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    //setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="weather-forecast">
          <div className="row">
            <div className="d-flex">
              <div className="col-2 ">
                <WeatherForecastFuture data={forecast[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <div></div>;
  }
}
