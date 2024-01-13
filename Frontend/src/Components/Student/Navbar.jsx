import React from "react";
import "../Style/style.css";
import logo from "../Assets/icons/logo.png";
import notification2 from '../Assets/icons/notification2.png'
const Navbar = () => {
  return (
    <div className="container">
      <div className="top-bar"></div>
      <div className="mid-bar">
        <div className="logo">
          <img className="logoicon" src={logo}></img>
        </div>
        <div className="logotext">Medical Log</div>
        <div className="notification">
          <img className="notifyicon2" src={notification2}></img>
        </div>
        <div className="btnlogout" type="Button">
          Logout
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-grey fixed-top ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Academics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PG-Log
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Admission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                More
              </a>
            </li>
          </ul>
          <div className="btnsupport" type="Button">
            Support
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
