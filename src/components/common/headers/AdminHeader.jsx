import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStickyHeader from "../../../hooks/useStickyHeader";
import MobileMenu from "./mobileMenu";
import tbu_logo from "./tbu-logo.jpeg";

const AdminHeader = () => {
  useStickyHeader();
  const [othersOption, setOtherOption] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/admin/login");

    
  };
  return (
    <div className="navbar-area ">
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />

      <div className="desktop-nav ">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand me-0" to="/">
              <img
                src={tbu_logo}
                width={110}
                className="black-logo"
                alt="logo"
              />
            </Link>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link to={"/admin/"} className={`nav-link`}>
                    INQUIRIES
                  </Link>
                </li>
                <li className="nav-item">
                  <a onClick={handleLogout} className={`nav-link cursor-pointer`}>
                    LOGOUT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="others-option-for-responsive">
        <div className="container">
          <div className="menu-icon">
            <i
              className={`ri-menu-line ${menuActive ? "d-none" : "d-block "}`}
              onClick={() => setMenuActive(true)}
            ></i>
            <i
              className={`ri-close-line  ${menuActive ? "d-block " : "d-none"}`}
              onClick={() => setMenuActive(false)}
            ></i>
          </div>

          <div className={`container ${othersOption ? "active" : ""} `}>
            <div className="option-inner">
              <div className="others-options justify-content-center d-flex align-items-center">
                <ul>
                  <li>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i className="ri-search-2-line"></i>
                    </button>
                  </li>
                  <li>
                    <Link className="quote text-decoration-none" to="/contact">
                      <i className="ri-chat-quote-line"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
