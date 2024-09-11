import React, { useRef } from "react";
import useClickOutside from "../../../hooks/useClickOutside";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./index.scss";

const SidebarNav = ({ isOpen, setOpen }) => {
  return (
    <>
      <div className={`sidebar-menu ${isOpen ? "active" : ""}`}>
        <div className="sidebar-top">
          <span className="close-menu" onClick={() => setOpen(false)}>
            <IoClose />
          </span>
        </div>
        <div className="side-menu-content">
          <ul className="sidemenu-list">
            <li className="sidemenu-item">
              <Link>Əsas səhifə</Link>
            </li>
            <li className="sidemenu-item">
              <Link>Şirkətimiz</Link>
            </li>
            <li className="sidemenu-item">
              <Link>Xidmətlər</Link>
            </li>
            <li className="sidemenu-item">
              <Link>Blog</Link>
            </li>
            <li className="sidemenu-item">
              <Link>Əlaqə</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
