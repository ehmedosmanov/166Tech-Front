import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import truckImage from "../../../assets/truck.png";
import "./index.scss";
import { Link } from "react-router-dom";

const AutoParkSection = () => {
  const trucks = [
    {
      title: "Soyuduculu",
      details: "5.1 metr / 5 ton",
      image: truckImage,
    },
    {
      title: "Soyuduculu",
      details: "5.1 metr / 5 ton",
      image: truckImage,
    },
    {
      title: "Soyuduculu",
      details: "5.1 metr / 5 ton",
      image: truckImage,
    },
    {
      title: "Soyuduculu",
      details: "5.1 metr / 5 ton",
      image: truckImage,
    },
    {
      title: "Soyuduculu",
      details: "5.1 metr / 5 ton",
      image: truckImage,
    },
  ];

  return (
    <section className="truck-slider">
      <div className="container">
        <div className="section-header">
          <h3>Bizim avtopark</h3>
          {/* <Link to="services" className="view-all">
            Hamısına bax →
          </Link> */}
        </div>
        <div className="truck-slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            {trucks.map((truck, index) => (
              <SwiperSlide key={index}>
                <div className="auto-card">
                  <div className="auto-img">
                    <img src={truck.image} alt={truck.title} />
                  </div>
                  <div className="auto-content">
                    <h3>{truck.title}</h3>
                    <p>{truck.details}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AutoParkSection;
