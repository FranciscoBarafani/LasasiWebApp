//Essentials
import React, { useState } from "react";
import "./admin.scss";
import { Switch, Route } from "react-router-dom";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/auth";
//Components
import { message } from "antd";
import SideMenu from "../../components/SideMenu";
import TopicsManager from "../../components/TopicsManager";
import LinksManager from "../../components/LinksManager";
//Login Form
import LoginForm from "../../forms/LoginForm";

export default function Admin() {
  //Current Logged User
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //Login
  const onSubmit = (email, password) => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        message.success("Inicio de Sesión Correcto");
        setUser(response.user);
      })
      .catch((error) => {
        message.error("Error al iniciar sesion, corrobora tus datos");
      })
      .finally(() => setIsLoading(false));
  };
  //LogOut
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        message.info("Has cerrado sesión.");
        setUser(null);
      })
      .catch(() =>
        message.error("Ocurrio un error al cerrar sesion, intente nuevamente")
      );
  };

  //Return in this functions checks if the user is logged or not
  return (
    <div className="admin">
      {user ? (
        <AdminMenu logOut={logOut} />
      ) : (
        <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      )}
    </div>
  );
}

//This functions renders the Admin menu once the User has logged in succesfully
function AdminMenu(props) {
  const { logOut } = props;
  return (
    <>
      <div className="menu">
        <SideMenu logOut={logOut} />
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
    </>
  );
}
