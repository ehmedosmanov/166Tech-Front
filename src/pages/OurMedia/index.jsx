import React from "react";
import "./index.scss";
import PageTitle from "../../components/UI/PageTitle";
import MediaCard from "../../components/UI/MediaCard";

const OurMedia = () => {
  const mediaData = [
    {
      date: "17 June 2021",
      title: "Lorem ipsum dolor sit amet consectetur?",
      description:
        " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
    },
    {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
      {
        date: "17 June 2021",
        title: "Lorem ipsum dolor sit amet consectetur?",
        description:
          " Lorem ipsum dolor sit amet consectetur. Est vestibulum ornare viverra vestibulum neque turpis. Enim at amet et vivamus rhoncus.",
      },
  ];

  return (
    <section className="our-media-page">
      <div className="container">
        <PageTitle title="Mediada biz" />

        <div className="our-media-section">

            {
                mediaData.map((media,index)=>(
                    <div key={index}>
                    <MediaCard {...media} />
                    
                    </div>
                ))
            }

        </div>
      </div>
    </section>
  );
};

export default OurMedia;
