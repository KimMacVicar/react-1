import React from "react";

export default function Forecast(props) {
  function maxTemp() {
    let max = Math.round(props.fetch.max);
    return max;
  }
  function minTemp() {
    let min = Math.round(props.fetch.min);
    return min;
  }

  return (
    <div
      className="row d-flex carousel slide pt-4 justify-content-center"
      id="first-row"
      data-bs-ride="carousel"
    >
      <div className="col-xl-8 forecast">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="d-flex justify-content-around text-center pb-3 pt-3"
              id="daily-forecast-temps"
            >
              <div className="flex-column" id="daily-forecast-temps">
                <div className="col">
                  <span id="highest">
                    <strong>{maxTemp()}°</strong>
                  </span>
                  <span>
                    <strong className="separator"> - </strong>
                  </span>
                  <span id="lowest">
                    <strong>{minTemp()}°</strong>
                  </span>
                </div>
                <img
                  className="icon"
                  src={props.fetch.icon}
                  alt="weather-icon"
                />
                <p className="mb-0">
                  <strong>esd</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
