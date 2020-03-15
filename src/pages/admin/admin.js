//Essentials
import React from "react";
import "./admin.scss";
import { Switch, Route } from "react-router-dom";
//Components
import SideMenu from "../../components/SideMenu";
import TopicsManager from "../../components/TopicsManager";
import LinksManager from "../../components/LinksManager";

export default function Admin() {
  return (
    <div className="admin">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="content">
        <Switch>
          <Route path="/admin/manage-topics">
            <TopicsManager />
          </Route>
          <Route path="/admin/manage-links">
            <LinksManager />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
