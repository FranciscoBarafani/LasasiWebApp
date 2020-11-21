//Essentials
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import firebase from "./utils/FireBase";
//Redux
//Redux
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

//Main Pages
import MainLayout from "./layouts/MainLayout";
//Admin Page
import Admin from "./pages/admin";

export default function App() {
  firebase.auth().signInAnonymously();

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route path="/main">
            <MainLayout />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
