import React, { useState } from "react";
import "./Info.css";
import TimeStamp from "./TimeStamp";

export default function Temp(props) {
  let [unit, setUnit] = useState("celsius");
  function fahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="float-left" id="current-temp">
          {props.celsius}°
        </span>
        <a className="float-left" id="temp-celsius" href="/" onClick={celsius}>
          {" "}
          C
        </a>
        <span id="separator"> | </span>
        <a
          className="float-left"
          id="temp-fahrenheit"
          href="/"
          onClick={fahrenheit}
        >
          {" "}
          F
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <span className="float-left" id="current-temp">
          {Math.round((props.celsius * 9) / 5 + 32)}°
        </span>
        <a className="float-left" id="temp-celsius" href="/" onClick={celsius}>
          {" "}
          C
        </a>
        <span id="separator"> | </span>
        <a
          className="float-left"
          id="temp-fahrenheit"
          href="/"
          onClick={fahrenheit}
        >
          {" "}
          F
        </a>
      </div>
    );
  }
}
