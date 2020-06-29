//Essentials
import React from "react";
import "./Calendar.scss";

//This components renders a google calendar shared with a Public Address

export default function MyCalendar(props) {
  const { source } = props;
  return (
    <div className="calendar">
      <iframe
        className="calendar-iframe"
        title="Calendario"
        src={source}
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
}
