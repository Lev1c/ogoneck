import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import NewsAdmin from "../components/admin/news/news";
import NewsCreate from "../components/admin/news/newsCreate";
import NewsChange from "../components/admin/news/newsChange";
import InfoAdmin from "../components/admin/info/info";
import InfoCreate from "../components/admin/info/infoCreate";
import InfoChange from "../components/admin/info/infoChange";
import DocumentAdmin from "../components/admin/document/document";
import FeedBack from "../components/admin/feedback/feedback";
import FeedBackChange from "../components/admin/feedback/feedbackChange";

const SettingRouteMainAdmin = () => {
  return (
    <>
      <Routes>
        <Route key={1} path={"/news"} element={<NewsAdmin />} exact />
        <Route key={1} path={"/news/create"} element={<NewsCreate />} exact />
        <Route
          key={1}
          path={"/news/change/:id"}
          element={<NewsChange />}
          exact
        />

        <Route key={1} path={"/info"} element={<InfoAdmin />} exact />
        <Route key={1} path={"/info/create"} element={<InfoCreate />} exact />
        <Route
          key={1}
          path={"/info/change/:id"}
          element={<InfoChange />}
          exact
        />

        <Route key={1} path={"/document"} element={<DocumentAdmin />} exact />

        <Route key={1} path={"/feedback"} element={<FeedBack />} exact />
        <Route
          key={1}
          path={"/feedback/change/:id"}
          element={<FeedBackChange />}
          exact
        />

        <Route path="*" element={<Navigate to="/admin" />} />
      </Routes>
    </>
  );
};

export default SettingRouteMainAdmin;
