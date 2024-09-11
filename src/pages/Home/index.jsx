import React from "react";
import HeroSection from "../../components/HomeComponents/HeroSection";
import InfoSection from "../../components/HomeComponents/InfoSection";
import Companies from "../../components/HomeComponents/Companies";
import CompanyServices from "../../components/HomeComponents/CompanyServices";
import AutoParkSection from "../../components/HomeComponents/AutoParkSection";
import OurMedia from "../../components/HomeComponents/OurMedia";
import BannerSection from "../../components/HomeComponents/BannerSection";
import ContriesWeWork from "../../components/HomeComponents/CountriesWeWork";
import CustomerReviews from "../../components/HomeComponents/CustomerReviews";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <Companies />
      <CompanyServices />
      <AutoParkSection />
      <OurMedia />
      <CustomerReviews/>
      <ContriesWeWork/>
      <BannerSection/>
    </>
  );
};

export default Home;
