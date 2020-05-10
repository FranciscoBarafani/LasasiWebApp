//Essentials
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Main Pages
import MainLayout from "./layouts/MainLayout";
//Admin Page
import Admin from "./pages/admin";

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="main" />
        <Route path="/main">
          <MainLayout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}
