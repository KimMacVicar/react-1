import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [info, showInfo] = useState("");

  function submitSearch(event) {
    event.preventDefault();

    let apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    let weatherInfo = {
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    };
    showInfo(
      <div>
        <ul className="list">
          <li>Temperature: {Math.round(weatherInfo.temperature)}°C </li>
          <li>Description: {weatherInfo.description}</li>
          <li>Humidity: {weatherInfo.humidity}</li>
          <li>Wind: {weatherInfo.wind}</li>
          <li className="icon">
            {" "}
            <img src={weatherInfo.icon} alt="weather" />
          </li>
        </ul>
      </div>
    );
  }

  function returnCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="search">
      <form className="searchForm" onSubmit={submitSearch}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={returnCity}
        />
        <input type="submit" value="search" />
      </form>
      <h3>{info}</h3>
    </div>
  );
}
