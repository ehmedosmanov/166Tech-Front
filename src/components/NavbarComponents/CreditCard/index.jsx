import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import "./index.scss";

const CreditCard = () => {
  return (
    <>
      <div className="credit-card">
        <span className="card">
          <CiCreditCard1 />
        </span>
        <span>Onlayn ödəniş</span>
      </div>
    </>
  );
};

export default CreditCard;
