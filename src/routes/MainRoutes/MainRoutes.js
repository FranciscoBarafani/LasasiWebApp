import React from "react";
import { Switch, Route } from "react-router-dom";

//Main Pages
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Events from "../../pages/events";
import Home from "../../pages/home";
import Links from "../../pages/links";
import Topics from "../../pages/topics";
import Error404 from "../../pages/error404";

export default function MainRoutes() {
  return (
    <Switch>
      <Route path="/main/about" exact>
        <About />
      </Route>
      <Route path="/main/contact" exact>
        <Contact />
      </Route>
      <Route path="/main/events" exact>
        <Events />
      </Route>
      <Route path="/main" exact>
        <Home />
      </Route>
      <Route path="/main/links" exact>
        <Links />
      </Route>
      <Route path="/main/topics" exact>
        <Topics />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  );
}
