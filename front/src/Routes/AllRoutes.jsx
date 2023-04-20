import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/about" element={<AboutPage></AboutPage>} />
      <Route path="/signup" element={<SignupPage></SignupPage>} />
      <Route path="/login" element={<LoginPage></LoginPage>} />
    </Routes>
  );
};

export default AllRoutes;
