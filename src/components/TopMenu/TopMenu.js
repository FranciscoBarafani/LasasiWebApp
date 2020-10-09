//Essentials
import React from "react";
import "./TopMenu.scss";
//Components
import { Menu } from "antd";
import { Link } from "react-router-dom";
//Assets / Antd Icons
import {
  HomeOutlined,
  CalendarOutlined,
  FileTextOutlined,
  LinkOutlined,
  InfoCircleOutlined,
  MailOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

//This component renders the top menu with the asigned links

export default function TopMenu() {
  return (
    <div className="top-menu">
      <Menu mode="horizontal">
        <Menu.Item>
          <HomeOutlined />
          <Link to="/main">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <FileTextOutlined />
          <Link to="/main/topics">Topicos</Link>
        </Menu.Item>
        <Menu.Item>
          <FilePdfOutlined />
          <Link to="/main/documents">Documentos</Link>
        </Menu.Item>
        <Menu.Item>
          <CalendarOutlined />
          <Link to="/main/events">Eventos</Link>
        </Menu.Item>
        <Menu.Item>
          <LinkOutlined />
          <Link to="/main/links">Enlaces</Link>
        </Menu.Item>
        <Menu.Item>
          <InfoCircleOutlined />
          <Link to="/main/about">Sobre Nosotros</Link>
        </Menu.Item>
        <Menu.Item>
          <MailOutlined />
          <Link to="/main/contact">Contacto</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
