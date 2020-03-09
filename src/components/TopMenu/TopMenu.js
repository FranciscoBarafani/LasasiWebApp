import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  CalendarOutlined,
  FileTextOutlined,
  LinkOutlined,
  InfoCircleOutlined,
  MailOutlined
} from "@ant-design/icons";
import "./TopMenu.scss";

export default function TopMenu() {
  return (
    <div className="top-menu">
      <Menu mode="horizontal">
        <Menu.Item>
          <HomeOutlined />
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <FileTextOutlined />
          <Link to="/topics">Topicos</Link>
        </Menu.Item>
        <Menu.Item>
          <CalendarOutlined />
          <Link to="/events">Eventos</Link>
        </Menu.Item>
        <Menu.Item>
          <LinkOutlined />
          <Link to="/links">Enlaces</Link>
        </Menu.Item>
        <Menu.Item>
          <InfoCircleOutlined />
          <Link to="/about">Sobre Nosotros</Link>
        </Menu.Item>
        <Menu.Item>
          <MailOutlined />
          <Link to="/contact">Contacto</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
