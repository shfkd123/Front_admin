import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginGW from "./pages/LoginGW";
import LoginMJ from "./pages/LoginMJ";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginGW" element={<LoginGW />} />
        <Route path="/loginMJ" element={<LoginMJ />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
