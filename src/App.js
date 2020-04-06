import React from "react";
import { Layout } from "antd";
//Firebase
import firebase from "./utils/FireBase";
import "firebase/auth";
//El as es para cambiar el nombre del componente importado
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Importacion de Componentes
import TopMenu from "./components/TopMenu";
import MyFooter from "./components/Footer";
import MyCarousel from "./components/Carousel";
//Pages
import About from "./pages/about";
import Contact from "./pages/contact";
import Events from "./pages/events";
import Home from "./pages/home";
import Links from "./pages/links";
import Topics from "./pages/topics";
import Error404 from "./pages/error404";
import Admin from "./pages/admin";

export default function App() {
  const { Content, Footer } = Layout;

  return (
    <Layout>
      <Router>
        <Content>
          <MyCarousel />
          <TopMenu />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>
        <Footer>
          <MyFooter />
        </Footer>
      </Router>
    </Layout>
  );
}
