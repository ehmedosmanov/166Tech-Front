import React from "react";
import "./index.scss";
import starIcon from "../../../assets/user-review/star-image.svg";


const ReviewCard = ({ userImage, reviewNumber, userComment, userName }) => {
  return (
    <div className="review-card">
      <div className="card-container">
        <div className="card-top">
          <div className="user-img">
            <img src={userImage} alt="user-image" />
          </div>
          <div className="reveiw-number">
            <span>{reviewNumber}</span>
          </div>
        </div>

        <div className="card-content">
          <div className="user-rate">
            <img src={starIcon} alt="user-rate" />
            <img src={starIcon} alt="user-rate" />
            <img src={starIcon} alt="user-rate" />
            <img src={starIcon} alt="user-rate" />
            <img src={starIcon} alt="user-rate" />
          </div>
          <p className="user-comment">{userComment}</p>
        </div>

        <div className="card-bottom">
          <div className="user-name">
            <h6>{userName}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
