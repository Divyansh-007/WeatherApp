import React, { Component } from "react";
import "../styles/dateStyle.css";

class dateTimeComponent extends Component {
  constructor(props) {
    super(props);

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

    let today = new Date();

    let date =
      today.getDate() +
      " " +
      months[today.getMonth()] +
      " " +
      today.getFullYear();

    let hrs = today.getHours();
    let mins = today.getMinutes();
    let meridian = "AM";

    if (hrs > 12) {
      hrs = hrs - 12;
      meridian = "PM";
    }

    let time = hrs + ":" + mins + " " + meridian;

    this.state = {
      date: date,
      time: time,
    };
  }

  render() {
    const { date, time } = this.state;
    return (
      <div>
        <h2 className="date">
          <i class="far fa-calendar-alt"></i> {date}{" "}
          <i class="far fa-clock"></i> {time}
        </h2>
      </div>
    );
  }
}

export default dateTimeComponent;
