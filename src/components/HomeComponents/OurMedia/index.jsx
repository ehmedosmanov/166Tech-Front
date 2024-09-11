import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import "./index.scss";
import MediaCard from "../../UI/MediaCard";

const OurMedia = () => {
  return (
    <section className="our-media">
      <div className="container">
        <SectionTitle to="#" title="Mediada biz" is={false} />
        <div className="top-block">
          <div className="block-content">
            <span className="date">17 June 2021</span>
            <h4 className="headline">
              Lorem ipsum dolor sit amet consectetur.
            </h4>
            <button className="read-more-btn">Ətraflı oxu</button>
          </div>
        </div>
        <div className="media-cards">
          <MediaCard
            date={"17 June 2021"}
            title={"Lorem ipsum dolor sit amet consectetur?"}
            description={
              " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus."
            }
          />
          <MediaCard
            date={"17 June 2021"}
            title={"Lorem ipsum dolor sit amet consectetur?"}
            description={
              " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus."
            }
          />
          <MediaCard
            date={"17 June 2021"}
            title={"Lorem ipsum dolor sit amet consectetur?"}
            description={
              " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default OurMedia;
