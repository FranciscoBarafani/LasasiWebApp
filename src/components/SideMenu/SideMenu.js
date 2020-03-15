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
  LogoutOutlined
} from "@ant-design/icons";

export default function SideMenu() {
  return (
    <div className="side-menu">
      <Menu mode="vertical-left">
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
          Cerrar Sesion
        </Menu.Item>
      </Menu>
    </div>
  );
}
