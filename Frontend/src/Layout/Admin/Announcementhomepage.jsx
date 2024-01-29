import React, { useState } from "react";
import "../../Components/Style/samp.css";
import Adminnavbar from "../../Components/Admin/Adminnavbar";
import logo from "../../Components/Assets/icons/logo.png";
import notification1 from "../../Components/Assets/icons/notification1.png";
import home from "../../Components/Assets/icons/home.png";
import Announce from "../../Components/Assets/icons/Announce.png";
import CreateAnnounce from "../../Components/Assets/icons/CreateAnnouncement.png";
import EditAnnounce from "../../Components/Assets/icons/EditAnnouncement.png";
import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Admin/Navbar";
import Announcement  from "./Announcement";
import Createannouncement from "./CreateAnnouncement";
import EditAnnouncement from "./EditAnnouncement";

const Announcementhomepage = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showcreateAnnouncement, setShowcreateAnnouncement] = useState(false);
  const [showeditAnnouncement, setShoweditAnnouncement] = useState(false);

  const handleOptions = (component) => {
    if (component === "Announcement") {
      setShowAnnouncement(true);
      setShowcreateAnnouncement(false);
      setShoweditAnnouncement(false);
    } else if (component === "Createannouncement") {
      setShowAnnouncement(false);
      setShowcreateAnnouncement(true);
      setShoweditAnnouncement(false);
    } else if (component === "EditAnnouncement") {
      setShowAnnouncement(false);
      setShowcreateAnnouncement(false);
      setShoweditAnnouncement(true);
    }
  };

  return (
    <div className="container">
      {showeditAnnouncement && <EditAnnouncement/>}
      {showcreateAnnouncement && <Createannouncement/>}
      <div className="top-bar w-full top-0"></div>
      <div className="mid-bar w-full top-30">
        <div className="logo">
          <img className="logoicon" src={logo}></img>
        </div>
        <div className="logotext">Medical Log</div>
        <div className="notification ml-425 mt-9">
          <img className="notifyicon1" src={notification1}></img>
        </div>
        <div className="btnlogout" type="Button">
          Logout
        </div>
      </div>

      <Navbar />

      <div className="side-bar">
        <nav className="left-navbar">
          <button className="w-30 h-15">
            <a href="/Announcementhomepage">
              {" "}
              <img className="home" src={home} alt="home icon" />
              &nbsp; Home
            </a>
          </button>

        
          <button
            className="sidelink"
            onClick={() => handleOptions("Announcement")}
          >
            <img className="Announce" src={Announce} alt="Announce icon" />
            &nbsp; Announcement
          </button>
          <button className="sidelink"
          onClick={() => handleOptions("Createannouncement")}>
            <img
              className="CreateAnnouncement"
              src={CreateAnnounce}
              alt="Create Announcement icon"

            />
            &nbsp; Create Announcement
          </button>
          {/* <button className="sidelink" onClick={() => handleOptions("EditAnnouncement")}>
            <img
              className="EditAnnouncement"
              src={EditAnnounce}
              alt="Edit Announcement icon"
            />
            &nbsp; Edit Announcement
          </button> */}
          {showAnnouncement && <Announcement/>}
          
        </nav>
      </div>
    </div>
  );
};

export default Announcementhomepage;
