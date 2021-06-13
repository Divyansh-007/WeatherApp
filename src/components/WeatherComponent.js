import React from "react";
import "../styles/weatherStyle.css"; // style file from styles folder

function WeatherComponent(props) {
  // destructuring props
  const {
    current_wind_speed,
    current_humidity,
    current_temp,
    max_temp,
    min_temp,
    weather_icon,
    weather_type,
    pressure,
    sunrise,
    sunset,
  } = props.data.data;

  const icon_url = `http://openweathermap.org/img/wn/${weather_icon}@2x.png`; // icon url
  const sunrise_time = new Date(sunrise * 10000); // calculating sunrise time
  const sunset_time = new Date(sunset * 10000); // calculating sunset time

  // function to prefix zeros to value less than 10
  function addZero(value) {
    return value < 10 ? "0" + value : value;
  }

  // function to get meridian
  function getMeridian(hours) {
    return hours < 12 ? "AM" : "PM";
  }

  return (
    <div>
      {/* wind , humidity and current temperature */}
      <h2 className="wind_n_humidity">
        <i class="fas fa-wind wind_icon"></i> {current_wind_speed} m/s Winds{" "}
        <i class="fas fa-tint humidity_icon"></i> {current_humidity}% Humidity{" "}
        <i class="fas fa-thermometer-three-quarters temp_icon"></i>{" "}
        {current_temp} &#8451;
      </h2>

      {/* min-max temperature and weather conditions */}
      <div className="temp_n_weather">
        <div className="min_max_temp">
          <p className="max_temp">
            <i class="fas fa-thermometer-full"></i> High: {max_temp} &#8451;
          </p>
          <p className="min_temp">
            <i class="fas fa-thermometer-quarter"></i> Low: {min_temp} &#8451;
          </p>
        </div>
        <div className="weather">
          <img src={icon_url} alt="weather_icon" />
          <p>({weather_type})</p>
        </div>
      </div>

      {/* additional details in toogle */}
      <p>
        <a
          class="btn btn-light"
          data-bs-toggle="collapse"
          href="#content"
          role="button"
          aria-expanded="false"
          aria-controls="content"
        >
          More...
        </a>
      </p>
      <div class="collapse more" id="content">
        <div class="card card-body">
          <p>Pressure: {pressure} hPa</p>
          <p>
            Sunrise Time: {addZero(sunrise_time.getHours())} :{" "}
            {addZero(sunrise_time.getMinutes())}{" "}
            {getMeridian(sunrise_time.getHours())}
          </p>
          <p>
            Sunset Time: {addZero(sunset_time.getHours() - 12)} :{" "}
            {addZero(sunset_time.getMinutes())}{" "}
            {getMeridian(sunset_time.getHours())}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherComponent;
