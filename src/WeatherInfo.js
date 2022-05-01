import React from "react";
import FormatDate from "./FormatDate";

import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-4 WeatherInfo">
          <div className="overview">
            <h1>{props.data.city}</h1>
            <ul>
              <li className="formatteddate">
                <FormatDate date={props.data.date} />
              </li>

              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className="weather-icon justify-content-center">
            <li>
              <WeatherIcon code={props.data.icon} size={50} />
            </li>

            <ul>
              <li>
                <div className="temp">
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className=" weather-current-info justify-content-center">
            <ul>
              <li></li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
