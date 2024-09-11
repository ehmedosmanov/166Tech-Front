import React from "react";
import Truck from "../../../assets/image10.png";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import "./index.scss";
const ServiceCards = () => {
  return (
    <section className="services">
      <div className="services-grid">
        <div className="service-card-left">
          <div className="service-card large">
            <img src={Truck} alt="Truck Image" />
            <div className="content">
              <h3>Xidmətlərimiz</h3>
            </div>
            <button class="service-btn">
              <span class="service-icon">
                <CgArrowsExpandUpRight />
              </span>
            </button>
          </div>
        </div>
        <div class="service-card-right">
          <div class="service-card">
            <div className="content">
              <h3>Partnyorlar</h3>
            </div>
            <button class="service-btn">
              <span class="service-icon">
                <CgArrowsExpandUpRight />
              </span>
            </button>
          </div>
          <div>
            <div class="service-card">
              <div className="content">
                <h3>Haqqımızda</h3>
              </div>
              <button class="service-btn">
                <span class="service-icon">
                  <CgArrowsExpandUpRight />
                </span>
              </button>
            </div>
            <div class="service-card">
              <h3>Müştəri Rəyləri</h3>
              <button class="service-btn">
                <span class="service-icon">
                  <CgArrowsExpandUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ServiceCards;
