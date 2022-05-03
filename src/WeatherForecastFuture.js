import React from "react";
import WeatherIcon2 from "./WeatherIcon2";
import "./WeatherForecast.css";
import "./App.css";

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

  return <div></div>;
}
