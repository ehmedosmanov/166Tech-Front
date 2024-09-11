import React from "react";
import TopNavbar from "../../components/NavbarComponents/TopNavbar";
import MainNavbar from "../../components/NavbarComponents/MainNavbar";

const Navbar = () => {
  
  return (
    <nav>
      <div className="container">
        <TopNavbar />
      </div>
        <MainNavbar />
    </nav>
  );
};

export default Navbar;
