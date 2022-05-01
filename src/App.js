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
        <div className="row">
          <div className="col-4"></div>
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
