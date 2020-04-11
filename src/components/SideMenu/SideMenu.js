//Essentials
import React from "react";
import "./SideMenu.scss";
//Components
import { Menu } from "antd";
import { Link } from "react-router-dom";
//Assets
import {
  EditOutlined,
  LinkOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

//This component renders the side menu
export default function SideMenu(props) {
  const { logOut } = props;
  return (
    <Menu mode="vertical-left" theme="dark">
      <Menu.Item key="1">
        <EditOutlined />
        <Link to="/admin/manage-topics">Gestionar Topicos</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <LinkOutlined />
        <Link to="/admin/manage-links">Gestionar Enlaces</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <SettingOutlined />
        <Link to="/admin/settings">Configuracion</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <LogoutOutlined />
        <span onClick={logOut}>Cerrar Sesion</span>
      </Menu.Item>
    </Menu>
  );
}
