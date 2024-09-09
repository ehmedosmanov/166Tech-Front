import React, { useEffect, useRef, useState } from "react";
import { PiCaretDown, PiCaretUp } from "react-icons/pi";

import "./index.scss";
import useClickOutside from "../../../hooks/useClickOutside";

const LangDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedLanguage}
        <span className="arrow">
          {isOpen ? <PiCaretUp /> : <PiCaretDown />}
        </span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? "active" : ""}`}>
        <li onClick={() => selectLanguage("Eng")}>Eng</li>
        <li onClick={() => selectLanguage("Az")}>Az</li>
        <li onClick={() => selectLanguage("Rus")}>Rus</li>
      </ul>
    </div>
  );
};

export default LangDropdown;
