import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.city);
  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      coordinates: response.data.coord,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      gusts: response.data.wind.gust,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    const apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
        <div className="mt-3">
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Try again soon...";
  }
}
