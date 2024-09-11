import React, { useState } from "react";
import Logo from "../../../assets/image2.png";
import "./index.scss";
import { IoCallOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import DropdownItem from "../DropdownItem";
import navbarItems from "../../../data/navbarItems";
import SidebarNav from "../SidebarNav";

const MainNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="main-navbar">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="search">
          <IoSearchOutline className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="navbar">
          <ul className="navbar-list">
            {navbarItems.map((item, index) => (
              <li key={index} className="navbar-item">
                {!item.dropdown ? (
                  <Link to={item.path}>{item.name}</Link>
                ) : (
                  <DropdownItem
                    text={item.name}
                    menuName={item.name}
                    openMenu={openMenu}
                    toggleDropdown={toggleDropdown}
                  />
                )}
              </li>
            ))}
          </ul>
          <button className="call-btn">
            <span className="call-icon">
              <IoCallOutline />
            </span>
            Book a call
          </button>
        </div>
        <div className="burger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <SidebarNav isOpen={isOpen} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default MainNavbar;
