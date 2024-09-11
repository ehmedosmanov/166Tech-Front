import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
