import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import AboutTheTown from "../views/AboutTheTown";
import BidsAndAwards from "../views/BidsAndAwards";
import FullDisclosure from "../views/FullDisclosure";
import HomePage from "../views/HomePage";
import Offices from "../views/Offices";
import Officials from "../views/Officials";

const MainRouter = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/disclosure" element={<FullDisclosure />} />
          <Route path="/bids-rewards" element={<BidsAndAwards />} />
          <Route path="/about-town" element={<AboutTheTown />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/officials" element={<Officials />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default MainRouter;
