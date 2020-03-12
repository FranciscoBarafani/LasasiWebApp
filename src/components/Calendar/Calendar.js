import React from "react";
import "./Calendar.scss";

export default function MyCalendar(source) {
  return (
    <div className="calendar">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FArgentina%2FBuenos_Aires&amp;src=ZXMudXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
