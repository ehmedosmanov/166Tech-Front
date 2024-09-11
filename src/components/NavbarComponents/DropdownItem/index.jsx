import React, { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import useClickOutside from "../../../hooks/useClickOutside";

const DropdownItem = ({ text, menuName, openMenu, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => {
    if (openMenu === menuName) {
      toggleDropdown(null);
    }
  });
  return (
    <li
      ref={dropdownRef}
      className="navbar-item"
      onClick={() => toggleDropdown(menuName)}
    >
      <Link>
        {text}
        <span className="dropdown-icon">
          <IoIosArrowDown />
        </span>
      </Link>
      <ul className={`dropdown-menu ${openMenu === menuName ? "active" : ""}`}>
        <li>
          <Link>Haqqımızda</Link>
        </li>
        <li>
          <Link>Bizim komanda</Link>
        </li>
      </ul>
    </li>
  );
};

export default DropdownItem;
