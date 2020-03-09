//Essentials
import React from "react";
import "./events.scss";
//Components
import MyCalendar from "../../components/Calendar";
export default function Events() {
  return (
    <div className="events">
      <h2>Calendario de Eventos</h2>
      <MyCalendar />
    </div>
  );
}
