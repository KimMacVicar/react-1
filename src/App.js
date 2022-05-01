import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import CoderStamp from "./CoderStamp";
import ReactDOM from "react-dom";
import Weather from "./weather";

export default function App() {
  return (
    <div className="container">
      <div className="col-12">
        <div className=" row d-flex justify-content-center">
          <h1 className="WeatherAppTitle">Weather App</h1>
          <div className="row">
            <div className="col-12">
              <Weather className="col-4" city="Saskatoon" />
            </div>
          </div>
        </div>
        <div className="container fore">
          <div className="row">
            <div className="col-2">
              <li>
                <strong>Monday</strong>
              </li>
              <li>20°</li>
              <li>5°</li>
            </div>
            <div className="col-2 ">
              <li className="weekday">
                <strong>Tuesday</strong>
              </li>
              <li>22°</li>
              <li>7°</li>
            </div>
            <div className="col-2 ">
              <li className="weekday">
                <strong>Wednesday</strong>
              </li>
              <li>18°</li>
              <li>10°</li>
            </div>
            <div className="col-2">
              <li>
                <strong>Thursday</strong>
              </li>
              <li>17°</li>
              <li>12°</li>
            </div>
            <div className="col-2">
              <li>
                <strong>Friday</strong>
              </li>
              <li>21°</li>
              <li>9°</li>
            </div>
            <div className="col-2">
              <li>
                <strong>Saturday</strong>
              </li>
              <li>22°</li>
              <li>10°</li>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row d-flex ">
            <CoderStamp />
          </div>
        </div>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
