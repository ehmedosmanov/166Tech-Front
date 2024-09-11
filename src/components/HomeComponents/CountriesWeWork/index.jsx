import React from "react";
import "./index.scss";
import contriesImage from '../../../assets/Map.png'
import SectionTitle from "../../UI/SectionTitle";

const ContriesWeWork = () => {
  return (
    <section className="contries-we-work">
      <div className="container">
      <SectionTitle to="#" title="Fəaliyyət göstərdiyimiz ölkələr" is={false} />
        <div className="contries-image">
            <img src={contriesImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContriesWeWork;
