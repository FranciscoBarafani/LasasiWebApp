//Essentials
import React from "react";
import "./events.scss";
//Components
import MyCalendar from "../../components/Calendar";

//Assets
import { GOOGLE_CALENDAR } from "../../utils/constants";

export default function Events() {
  return (
    <div className="events">
      <h2>Calendario de Eventos</h2>
      <MyCalendar source={GOOGLE_CALENDAR} />
    </div>
  );
}
