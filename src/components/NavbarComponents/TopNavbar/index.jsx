import React from "react";
import CustomerToggle from "../../UI/CustomerToggle";
import LangDropdown from "../LangDropdown";
import CreditCard from "../CreditCard";
import "./index.scss";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-side-top-navbar">
        <CustomerToggle />
      </div>
      <div className="right-side-top-navbar">
        <CreditCard />
        <LangDropdown />
      </div>
    </div>
  );
};

export default TopNavbar;
