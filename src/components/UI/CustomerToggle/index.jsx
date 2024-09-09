import React, { useState } from "react";
import "./index.scss";

const CustomerToggle = () => {
  const [active, setActive] = useState("individual");

  return (
    <div className="customer-toggle">
      <button
        className={`toggle-button ${active === "individual" ? "active" : ""}`}
        onClick={() => setActive("individual")}
      >
        Fərdi Müştərilər
      </button>
      <button
        className={`toggle-button ${active === "corporate" ? "active" : ""}`}
        onClick={() => setActive("corporate")}
      >
        Korporativ Müştərilər
      </button>
    </div>
  );
};

export default CustomerToggle;
