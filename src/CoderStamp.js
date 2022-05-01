import React from "react";
import "./CoderStamp.css";

export default function CoderStamp() {
  return (
    <div className="row d-flex pt-4" data-ride="carousel">
      <div className="col-sm-4 footer-adj offset-md-2 pb-2 pt-2">
        <div className="coder">
          <a
            href="https://github.com/CatVirus22/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <span> Open-source code</span>
          </a>
          <span className="Name"> created by Kim MacVicar</span>
        </div>
      </div>
    </div>
  );
}
