import React, { Component } from "react";
import "./App.css";
import axios from "axios"; // for http request

import HeaderComponent from "./components/HeaderComponent";
import ChartComponent from "./components/ChartComponent";

class App extends Component {
  constructor(props) {
    super(props);

    // state to store data from response
    this.state = {
      current_temp: 0,
      max_temp: 0,
      min_temp: 0,
      current_humidity: 0,
      current_wind_speed: 0,
      weather_icon: "",
      weather_type: "",
      pressure: 0,
      sunrise: 0,
      sunset: 0,
      daily_forecast: [],
    };
  }

  componentDidMount() {
    // making api call
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=12.9716&lon=77.5946&exclude=minutely,hourly&units=metric&appid=1e899c74916c2762a82d4800a880e8ae"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          current_temp: response.data.current.temp,
          current_humidity: response.data.current.humidity,
          current_wind_speed: response.data.current.wind_speed,
          max_temp: response.data.daily[0].temp.max,
          min_temp: response.data.daily[0].temp.min,
          weather_icon: response.data.current.weather[0].icon,
          weather_type: response.data.current.weather[0].description,
          pressure: response.data.current.pressure,
          sunrise: response.data.current.sunrise,
          sunset: response.data.current.sunset,
          daily_forecast: response.data.daily,
        });
      })
      .catch((err) => {
        console.log(`error in fetching the data: ${err}`);
      });
  }

  render() {
    console.log("state", this.state);
    return (
      <div className="App">
        {/* header component (containing basic details)*/}
        <HeaderComponent data={this.state} />

        {/* Chart for next 7 days forecast */}
        <ChartComponent data={this.state} />
      </div>
    );
  }
}

export default App;
