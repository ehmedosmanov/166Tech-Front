import React from "react";
import "./index.scss";

const TeamMemberCard = ({ memberImage, memberName, memberPosition }) => {
  return (
    <div className="team-member-card">
      <div className="person-image">
        <div className="background"></div>
        <img src={memberImage} alt="person-image" />
      </div>
      <h5 className="person-name">{memberName}</h5>
      <p className="person-position">{memberPosition}</p>
    </div>
  );
};

export default TeamMemberCard;
