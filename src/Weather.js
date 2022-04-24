import React from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import "./App.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}$units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Triangle
      type="Puff"
      color="purple"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
