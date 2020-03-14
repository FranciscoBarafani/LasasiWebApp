//Essentials
import React from "react";
import "./SideMenu.scss";
//Components
import { Menu } from "antd";
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
          Gestionar Topicos
        </Menu.Item>
        <Menu.Item key="2">
          <LinkOutlined />
          Gestionar Enlaces
        </Menu.Item>
        <Menu.Item key="3">
          <SettingOutlined />
          Configuracion
        </Menu.Item>
        <Menu.Item key="4">
          <LogoutOutlined />
          Cerrar Sesion
        </Menu.Item>
      </Menu>
    </div>
  );
}
