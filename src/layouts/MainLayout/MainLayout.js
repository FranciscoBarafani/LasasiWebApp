import React from "react";
//Components
import TopMenu from "../../components/TopMenu";
import MyFooter from "../../components/Footer";
import MyCarousel from "../../components/Carousel";
//Routes
import MainRoutes from "../../routes/MainRoutes";

export default function MainLayout() {
  return (
    <div>
      <MyCarousel />
      <TopMenu />
      <MainRoutes />
      <MyFooter />
    </div>
  );
}
