import React from "react";
import "./index.scss";
import Stroke from "../../../assets/Stroke.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import services from "../../../data/services";

const CompanyServices = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h3>Xidmətlər</h3>
          <Link to="services" className="view-all">
            Hamısına bax →
          </Link>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="star-icon">
                <img src={Stroke} />
                <span className="right-arrow">
                  <FaAngleRight />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyServices;
