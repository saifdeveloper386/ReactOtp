import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
import Otp from "./Otp";
const Routing = () => {
  return (
    <>
      <Routes>
        {/* <Routes path="/" element={<Home />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </>
  );
};

export default Routing;
