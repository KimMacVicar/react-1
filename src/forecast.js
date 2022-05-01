mport React from "react";
import "./App.css";
import Search from "./Search";
import "./styles.css";

export default function formatDate(timestamp) {
  let date = new Date(timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}
function displayTemperature(response) {
  //console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");

  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

  //let tomorrowElement = document.querySelector("#tomorrow");
  //let nextElement = document.querySelector("#next");
  //let day3Element = document.querySelector("#day3");
  //let day4Element = document.querySelector("#day4");
  //let day5Element = document.querySelector("#day5");
  //let day6Element = document.querySelector("#day6");

  //var today = moment();
  // var d0 = today.format(`ddd`).toUpperCase();
  //var d1 = moment(today).add(1, `days`).format(`ddd`).toUpperCase();
  //var d2 = moment(today).add(2, `days`).format(`ddd`).toUpperCase();
  //var d3 = moment(today).add(3, `days`).format(`ddd`).toUpperCase();
  //var d4 = moment(today).add(4, `days`).format(`ddd`).toUpperCase();
  //var d5 = moment(today).add(5, `days`).format(`ddd`).toUpperCase();
  //var d6 = moment(today).add(6, `days`).format(`ddd`).toUpperCase();
  //console.log(d0, d1, d2, d3);

  //tomorrowElement.innerHTML = d1;
  //nextElement.innerHTML = d2;
  //day3Element.innerHTML = d3;
  //day4Element.innerHTML = d4;
  //day5Element.innerHTML = d5;
  //day6Element.innerHTML = d6;
  // console.log(response.data);

  getForecast(response.data.coord);
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  forecast.forEach(function(forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
<div class="col-2">
      <div id="next" class="weather-forecast-date">${formatDay(
        forecastDay.dt
      )}</div><div>
      <img
        class="sun"
        src="http://openweathermap.org/img/wn/${
          forecastDay.weather[0].icon
        }@2x.png"
        alt=""
        width="50"
      /></div>
      <div class="weather-forcast-temp">
        <span class="weather-forecast-temp-max">${Math.round(
          forecastDay.temp.max
        )}°</span>
        <span class="weather-forecast-temp-min">${Math.round(
          forecastDay.temp.min
        )}°</span>
    </div>
  </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
//function displayTomorrowTemp(response) {
// let tomorrowElement = document.querySelector("#tomorrow");
// let day = date[date.getDay()];
//console.log(day);
//if (date1Element === [0]) {
// date1Element === Tuesday;
// tomorrowElement = formatDate(response.data.dt * 1010);
// if (formatDate === "Tuesday") {
//  formatDate === "Wednesday";
// }
// tomorrowElement.innerHTML = formatDate;
//}

function search(city) {
  let apiKey = "2d34b827fa05a5518d1b4d8e1f540549";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
  //axios.get(apiUrl).then(displayTomorrowTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  handleSubmit;
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
function displayCelsiusTemperatureSearch(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
}

let celsiusTemperature = null;

let form = document.querySelector("#searchForm");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let date1 = document.querySelector("#tomorrow");
//date1.addEventListener("submit", displayTomorrowTemp);

search("Saskatoon");
