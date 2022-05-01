import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li className="formatteddate">
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="weather-temperature justify-content-center">
              <li>
                <WeatherIcon code={props.data.icon} size={60} />
              </li>

              <ul>
                <li>
                  <WeatherTemperature celsius={props.data.temperature} />
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="justify-content-center">
                <ul>
                  <li>Precipitation: {props.data.precipitation}20%</li>
                  <li>Humidity: {props.data.humidity}%</li>
                  <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
