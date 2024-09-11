import React from "react";
import "./index.scss";
import Countries from "../Countries";
import ServiceCards from "../ServiceCards";
const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="container">
        <div className="hero-title">
          <h1>
            Lorem ipsum dolor sit amet consectetur. <span>Magna</span> tellus
            nibh lectus congue amet.
          </h1>
        </div>
        <Countries />
        <ServiceCards />
      </div>
    </header>
  );
};

export default HeroSection;
