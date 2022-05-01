import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecasFuture(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day + 1];
  }

  return (
    <div className="container fore">
      <div className="row">
        <div className=" col-2 d-flex weather-forecast-date float-right">
          {day()}
        </div>
        <WeatherIcon code={props.data.weather[0].icon} />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">
            max: {maxTemperature()}
          </span>
          <br />
          <span className="weather-forecast-temperature-min">
            min: {minTemperature()}
          </span>
        </div>

        <div className=" col-4 d-flex  weather-forecast-date">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} />
        <div className="weather-forecast-temperatures">
          <span className="weather-forecast-temperature-max">
            max: {maxTemperature()}
          </span>
          <br />
          <span className="weather-forecast-temperature-min">
            min: {minTemperature()}
          </span>
        </div>
      </div>
    </div>
  );
}
