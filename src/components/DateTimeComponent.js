import React, { Component } from "react";
import "../styles/dateStyle.css"; // style file from styles folder

class dateTimeComponent extends Component {
  constructor(props) {
    super(props);

    // months list to render their name
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

    // getting today's date
    let today = new Date();

    // defining the date in required format
    let date =
      today.getDate() +
      " " +
      months[today.getMonth()] +
      " " +
      today.getFullYear();

    // deifining time in required format
    let hrs = today.getHours(); // hours
    let mins = today.getMinutes(); // minutes
    let meridian = "AM"; // meridian

    if (hrs > 12) {
      hrs = hrs - 12;
      meridian = "PM";
    }

    let time = hrs + ":" + mins + " " + meridian;

    // setting the state
    this.state = {
      date: date,
      time: time,
    };
  }

  render() {
    const { date, time } = this.state;
    return (
      // rendering date and time
      <div>
        <h2 className="date">
          <i class="far fa-calendar-alt icons"></i> {date}{" "}
          <i class="far fa-clock icons"></i> {time}
        </h2>
      </div>
    );
  }
}

export default dateTimeComponent;
