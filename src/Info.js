import React from "react";
import TimeStamp from "./TimeStamp";

 <div className="container">
      <div class="weatherAppWrapper">
        <div class="weatherApp">
          <form id="searchForm" class="mb-3">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-primary w-100"
                  id="button"
                />
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-8">
              <div class="overview">
                <h1 id="city"></h1>
                <ul>
                  <li>last updated <span id="date"></span></li>
                  <li id="description"></li>
                </ul>
              </div>
            </div>
            <div class="container2">
              <div class="col-4">
                <div class="clearfix weather-Temperature2"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="clearfix weather-Temperature">
                  <img src="" alt="Sunny" id="icon" />
                  <div class="todayTemp">
                    <strong id="temperature"></strong
                    ><span class="units"
                      ><a href="#" id="celsius-link" class="active">°C</a> |
                      <a href="#" id="fahrenheit-link">°F</a></span
                    >
                  </div>
                </div>
              </div class="container2">
              <div class="col-6">
                <ul>
                  <li class="dayInfo">Precipitation: 0%</li>
                  <li class="dayInfo">
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li class="dayInfo">Wind: <span id="wind"></span> km/hr</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="weather-forcast" id="forecast"></div>
        </div>
      </div>
