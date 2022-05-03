import React from "react";
import "./CoderStamp.css";

export default function CoderStamp() {
  return (
    <div className="row d-flex pt-4" data-ride="carousel">
      <div className="col-sm-12 footer-adj ">
        <div className="coder">
          <span>
            <a
              className="link"
              href="https://github.com/KimMacVicar/react-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
          </span>
          <span className="Name"> created by Kim MacVicar</span>
        </div>
      </div>
    </div>
  );
}
