import React from "react";
import "./Search";
import "./App.css";

export default function dateFunction(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let mins = props.date.getMinute();
  if (mins < 10) {
    mins == `0${mins}`;
  }
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <ul>
      <li id="current-date">
        {day}, {month} {date}, {year}.
      </li>
      <li id="current-time">
        Last time updated: {hours}:{minutes}
      </li>
    </ul>
  );
}
