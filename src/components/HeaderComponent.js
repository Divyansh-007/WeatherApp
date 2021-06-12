import React from "react";
import NameComponent from "./NameComponent";
import DateTimeComponent from "./DateTimeComponent";
import WeatherComponent from "./WeatherComponent";

function headerComponent(props) {
  return (
    <div>
      {/* name rendering */}
      <NameComponent />

      {/* date and time rendering */}
      <DateTimeComponent />

      {/* weather details rendering */}
      <WeatherComponent data={props} />
    </div>
  );
}

export default headerComponent;
