import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const SectionTitle = ({ to, title, is }) => {
  return (
    <div className="section-header">
      <h3>{title}</h3>
      {is && (
        <Link to={to} className="view-all">
          Hamısına bax →
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
