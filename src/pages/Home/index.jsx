import React from "react";
import HeroSection from "../../components/HomeComponents/HeroSection";
import InfoSection from "../../components/HomeComponents/InfoSection";
import Companies from "../../components/HomeComponents/Companies";
import CompanyServices from "../../components/HomeComponents/CompanyServices";
import AutoParkSection from "../../components/HomeComponents/AutoParkSection";
import OurMedia from "../../components/HomeComponents/OurMedia";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <Companies />
      <CompanyServices />
      <AutoParkSection />
      <OurMedia />
    </>
  );
};

export default Home;
