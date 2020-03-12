//Essentials
import React from "react";
import "./events.scss";
//Components
import MyCalendar from "../../components/Calendar";
export default function Events() {
  return (
    <div className="events">
      <h2>Calendario de Eventos</h2>
      <MyCalendar source="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FArgentina%2FBuenos_Aires&amp;src=ZXMudXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;showTitle=0" />
    </div>
  );
}
