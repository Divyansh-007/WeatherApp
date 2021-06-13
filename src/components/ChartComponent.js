import React from "react";
import { Line } from "react-chartjs-2";
import "../styles/chartStyle.css";

function ChartComponent(props) {
  const { data } = props;
  const daily_forecast = data.daily_forecast;
  console.log("daily_forecast", daily_forecast);

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let labels = [];
  let max_temp = [];
  let min_temp = [];

  for (let i = 0; i < daily_forecast.length; i++) {
    let date = new Date(daily_forecast[i].dt * 1000);

    let day = date.getDate();
    let month = date.getMonth();

    let label = day + " " + months[month];
    labels.push(label);
    max_temp.push(daily_forecast[i].temp.max);
    min_temp.push(daily_forecast[i].temp.min);
  }

  console.log("labels", labels);
  console.log("max_temp", max_temp);
  console.log("min_temp", min_temp);

  let chat_data = {
    labels: labels,
    datasets: [
      {
        label: "Maximum Temperature",
        data: max_temp,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
      },
      {
        label: "Minimum Temperature",
        data: min_temp,
        backgroundColor: "#00ff00",
        borderColor: "#00ff00",
      },
    ],
  };

  return (
    <div className="chart_area">
      <p className="heading">Next 7 Days Forecast</p>
      <Line
        data={chat_data}
        options={{
          responsive: true,
          pointStyle: "rectRounded",
          radius: 10,
        }}
        className="chart"
      />
    </div>
  );
}

export default ChartComponent;
