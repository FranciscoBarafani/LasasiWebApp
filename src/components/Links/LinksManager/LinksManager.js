//Essentials
import React, { useState } from "react";
//Components
import Links from "../Links";
import NewLink from "../NewLink";
import EditLink from "../EditLink";
import { Button } from "antd";

import "./LinksManager.scss";

export default function LinksManager() {
  const [activeShow, setActiveShow] = useState("links");
  const [selectedLink, setSelectedLink] = useState(null);

  //Active show handler
  const linkHandler = (render) => {
    switch (render) {
      case "links":
        return (
          <Links
            setSelectedLink={setSelectedLink}
            setActiveShow={setActiveShow}
          />
        );
      case "edit":
        return <EditLink setActiveShow={setActiveShow} link={selectedLink} />;
      case "new":
        return <NewLink setActiveShow={setActiveShow} />;
      default:
        break;
    }
  };

  return (
    <div className="links-manager">
      <div className="links-manager__menu">
        <Button onClick={() => setActiveShow("new")} type="primary">
          Nuevo Enlace
        </Button>
      </div>
      <div className="links-manager__show">{linkHandler(activeShow)}</div>
    </div>
  );
}
