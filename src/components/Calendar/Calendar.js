//Essentials
import React from "react";
import "./Calendar.scss";

//This components renders a google calendar shared with a Public Address

export default function MyCalendar(props) {
  const { source } = props;
  return (
    <div className="calendar">
      <iframe
        title="Calendario"
        src={source}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
