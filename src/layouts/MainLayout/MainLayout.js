import React from "react";
//Components
import TopMenu from "../../components/TopMenu";
import MyFooter from "../../components/Footer";
import MyBanner from "../../components/Banner";
import { BackTop, Avatar, Row } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Parallax } from "rc-scroll-anim";
//Initial Modal
import InitialModal from "../../components/InitialModal";
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
      <Row align="middle" justify="center" style={{ backgroundColor: "white" }}>
        <MyBanner />
      </Row>
      <TopMenu />
      <Row align="middle" justify="center">
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
      </Row>
      <Row align="middle" justify="center">
        <Parallax
          animation={[
            { y: 0, opacity: 1, playScale: [0, 0.2] },
            { blur: "0px", playScale: [0, 0.5] },
          ]}
          style={{
            transform: "translateY(50px)",
            filter: "blur(0px)",
            opacity: 0,
          }}
        >
          <MyFooter />
        </Parallax>
      </Row>
      <BackTop />
    </div>
  );
}
