//Essentials
import React, { useState } from "react";
import "./admin.scss";
import { Switch, Route } from "react-router-dom";
//Firebase
import firebase from "../../utils/FireBase";
import "firebase/auth";
//Components
import { message, Layout } from "antd";
import SideMenu from "../../components/SideMenu";
import TopicsManager from "../../components/Topics/TopicsManager";
import LinksManager from "../../components/Links/LinksManager";
import MembersManager from "../../components/Members/MembersManager";
import DocumentsManager from "../../components/Documents/DocumentsManager";
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
        setUser(false);
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
  const { Sider, Header, Content } = Layout;

  return (
    <Layout>
      <Header className="header">
        <h1>Menu de Administrador</h1>
      </Header>
      <Layout className="content">
        <Sider width={200}>
          <SideMenu logOut={logOut} />
        </Sider>
        <Content>
          <Switch>
            <Route path="/admin/manage-topics">
              <TopicsManager />
            </Route>
            <Route path="/admin/manage-links">
              <LinksManager />
            </Route>
            <Route path="/admin/manage-members">
              <MembersManager />
            </Route>
            <Route path="/admin/manage-documents">
              <DocumentsManager />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
