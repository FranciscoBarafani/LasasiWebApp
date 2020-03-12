import React from "react";
import "./Calendar.scss";

export default function MyCalendar(props) {
  const { source } = props;
  return (
    <div className="calendar">
      <iframe
        src={source}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
