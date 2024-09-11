import React from "react";
import "./index.scss";
import CounterCard from "./CounterCard";
const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="container">
        <div className="content-info">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            A videoconference was held with the participation of the acting
            chairman of the Customs Cooperation Council of the World A
            videoconference was held with the participation of the acting
            chairman of the Customs Cooperation Council of the World
          </p>
        </div>
        <div className="counter-info">
          <div className="counter-card">
            <div className="counter-content">
              <span className="number">2</span>
              <span className="plus">+</span>
            </div>
            <h4>Lorem Ipsum</h4>
          </div>
          <CounterCard number={2} text="Lorem Ipsum" duration={2} />
          <CounterCard number={10} text="Lorem Ipsum " duration={3} />
          <CounterCard number={50} text="Ipsum " duration={3.5} start={20} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
