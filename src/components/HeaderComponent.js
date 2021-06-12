import React from "react";
import NameComponent from "./NameComponent";
import DateTimeComponent from "./DateTimeComponent";
import WeatherComponent from "./WeatherComponent";

function headerComponent(props) {
  return (
    <div>
      <NameComponent />
      <DateTimeComponent />
      <WeatherComponent />
    </div>
  );
}

export default headerComponent;
