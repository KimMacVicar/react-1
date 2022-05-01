import React from "react";
import "./App.css";
import Search from "./Search";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import CoderStamp from "./CoderStamp";

export default function App() {
  return (
    <div className="container">
      <div className="col-12">
        <div className=" row d-flex justify-content-center">
          <h1 className="WeatherAppTitle">Weather App</h1>
          <div className="SearchBox">
            <Search />

            <forecast />
          </div>
        </div>
        <div className="col-12">
          <div className="row d-flex justify-content-left">
            <CoderStamp />
          </div>
        </div>
      </div>
    </div>
  );
}
