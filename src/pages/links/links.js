import React from "react";
import "./links.scss";
import MyLink from "../../components/Link";

export default function Links() {
  return (
    <div className="links">
      <h1>Enlaces</h1>
      <MyLink name="ICAO" address="https://www.icao.int/" />
      <MyLink name="JIAAC" address="https://www.argentina.gob.ar/jiaac" />
    </div>
  );
}
