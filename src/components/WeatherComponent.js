import React from "react";
import "../styles/weatherStyle.css";

function WeatherComponent(props) {
  return (
    <div>
      <h2>
        <i class="fas fa-wind"></i> 10 km/ph Winds <i class="fas fa-tint"></i>{" "}
        12% Humidity
      </h2>
      <div className="temp_n_weather">
        <span>20 C</span>
        <img
          src=" http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather_icon"
        />
      </div>
    </div>
  );
}

export default WeatherComponent;
