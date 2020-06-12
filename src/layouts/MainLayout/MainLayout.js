import React from "react";
//Components
import TopMenu from "../../components/TopMenu";
import MyFooter from "../../components/Footer";
import MyCarousel from "../../components/Carousel";
import { BackTop, Avatar } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
//Routes
import MainRoutes from "../../routes/MainRoutes";
//Background
import backgroundImage from "../../assets/images/background.svg";

import "./MainLayout.scss";

export default function MainLayout() {
  return (
    <div
      className="main-layout"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <MyCarousel />
      <TopMenu />
      <MainRoutes />
      <a
        href="https://wa.me/5493517862670"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar
          size={60}
          shape="circle"
          icon={
            <WhatsAppOutlined
              style={{ color: "white", backgroundColor: "transparent" }}
            />
          }
        />
      </a>
      <BackTop />
      <MyFooter />
    </div>
  );
}
