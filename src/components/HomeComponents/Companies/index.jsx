import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import logo1 from "../../../assets/companies/458552.png";
import logo2 from "../../../assets/companies/Trendyol_online.png";
import logo3 from "../../../assets/companies/camper.png";
import logo4 from "../../../assets/companies/karaca.png";
import logo5 from "../../../assets/companies/marja.png";
import logo6 from "../../../assets/companies/morhipo-logo-eyca-kampanya.png";
import "./index.scss";
const Companies = () => {
  return (
    <section className="companies">
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="swiper-card">
            <img src={logo1} alt="Logo 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <img src={logo2} alt="Logo 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <img src={logo3} alt="Logo 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <img src={logo4} alt="Logo 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <img src={logo5} alt="Logo 5" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-card">
            <img src={logo6} alt="Logo 6" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Companies;
