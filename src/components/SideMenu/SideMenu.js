//Essentials
import React from "react";
//Components
import { Menu, Popconfirm } from "antd";
import { Link } from "react-router-dom";
//Assets
import {
  EditOutlined,
  LinkOutlined,
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./SideMenu.scss";

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
        <UserOutlined />
        <Link to="/admin/manage-members">Gestionar Miembros</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <SettingOutlined />
        <Link to="/admin/settings">Configuracion</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <LogoutOutlined />
        <Popconfirm
          title="Cerrar sesión?"
          okText="Si"
          cancelText="No"
          onConfirm={logOut}
        >
          <span>Cerrar Sesion</span>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
}
