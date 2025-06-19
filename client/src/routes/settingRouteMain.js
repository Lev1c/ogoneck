import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/main/home/home";
import MainInfo from "../components/main/info/mainInfo";
import Info from "../components/main/info/info";
import NewsMain from "../components/main/news/newsMain";
import News from "../components/main/news/news";
import FeedBack from "../components/main/feetback/feetback";

const SettingRouteMain = () => {
  return (
    <>
      <Routes>
        <Route key={1} path={"/"} element={<Home />} exact />

        <Route key={1} path={"/info"} element={<MainInfo />} exact />
        <Route key={1} path={"/info/:id"} element={<Info />} exact />

        <Route key={1} path={"/news"} element={<NewsMain />} exact />
        <Route key={1} path={"/news/:id"} element={<News />} exact />

        <Route key={1} path={"/feedback"} element={<FeedBack />} exact />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default SettingRouteMain;
