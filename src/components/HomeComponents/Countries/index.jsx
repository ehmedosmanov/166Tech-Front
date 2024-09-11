import React from "react";
import UzFlag from "../../../assets/countries/uz.png";
import AeFlag from "../../../assets/countries/ae.png";
import AzFlag from "../../../assets/countries/az.png";
import CnFlag from "../../../assets/countries/cn.png";
import KzFlag from "../../../assets/countries/kz.png";
import PlFlag from "../../../assets/countries/pl.png";
import RoFlag from "../../../assets/countries/ro.png";
import "./index.scss";

const Countries = () => {
  return (
    <div className="countries-section">
      <div className="countries">
        <button class="country-btn">
          <img src={UzFlag} alt="Uzbekistan Flag" class="flag-icon" />
          <span class="country-name">Uzbekistan</span>
        </button>
        <button class="country-btn">
          <img src={AeFlag} alt="Ae Flag" class="flag-icon" />
          <span class="country-name">Dubai</span>
        </button>
        <button class="country-btn">
          <img src={AzFlag} alt="Azerbaijan Flag" class="flag-icon" />
          <span class="country-name">Azerbaijan</span>
        </button>
        <button class="country-btn">
          <img src={CnFlag} alt="China Flag" class="flag-icon" />
          <span class="country-name">China</span>
        </button>
        <button class="country-btn">
          <img src={KzFlag} alt="Kz Flag" class="flag-icon" />
          <span class="country-name">Kazakhstan</span>
        </button>
        <button class="country-btn">
          <img src={PlFlag} alt="Poland Flag" class="flag-icon" />
          <span class="country-name">Poland</span>
        </button>
        <button class="country-btn">
          <img src={RoFlag} alt="Romania Flag" class="flag-icon" />
          <span class="country-name">Romania</span>
        </button>
      </div>
    </div>
  );
};

export default Countries;
