import React from "react";
import MediaImg from "../../../assets/media/media.png";
import "./index.scss";

const MediaCard = ({ date, title, description }) => {
  return (
    <>
      <div className="media-card">
        <div className="media-card__content">
          <div className="media-card__image">
            <img src={MediaImg} alt="Media" />
          </div>
          <div className="media-card__info">
            <p className="media-card__date">{date}</p>
            <h3 className="media-card__title">{title}</h3>
            <p className="media-card__description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
