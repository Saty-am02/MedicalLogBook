import React, { useState } from "react";
import "../../Components/Style/samp.css"; // Assuming this file contains any custom styles
import Adminnavbar from "../../Components/Admin/Adminnavbar";
import logo from "../../Components/Assets/icons/logo.png";
import notification1 from "../../Components/Assets/icons/notification1.png";
import Addeditstudentlayout from "./Addeditstudentlayout";
import Searchstudent from "./Searchstudent";
import home from "../../Components/Assets/icons/home.png";
import student from "../../Components/Assets/icons/student.png";
import faculty from "../../Components/Assets/icons/faculty.png";
import addfaculty from "../../Components/Assets/icons/addfaculty.png";
import addstudent from "../../Components/Assets/icons/addstudent.png";
import search from "../../Components/Assets/icons/search.png";
import Addeditfaculty from "./Addeditfaculty";
import Searchfaculty from "./Searchfaculty";
import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Admin/Navbar";

const Adminhomepage = () => {
  const [showFacultyOptions, setShowFacultyOptions] = useState(false);
  const [showStudentOptions, setShowStudentOptions] = useState(false);
  const [showAddEditStudent, setShowAddEditStudent] = useState(false);
  const [showAddEditFaculty, setShowAddEditFaculty] = useState(false);
  const [showsearchstudent, setshowsearchstudent] = useState(false);
  const [showsearchfaculty, setshowsearchfaculty] = useState(false);

  const toggleFacultyOptions = () => {
    setShowFacultyOptions(!showFacultyOptions);
    setShowStudentOptions(false);
  };

  const toggleStudentOptions = () => {
    setShowStudentOptions(!showStudentOptions);
    setShowFacultyOptions(false);
  };

  const handlesuboptionstudent = (component) => {
    setShowAddEditStudent(false);

    if (component === "AddEditStudent") {
      setShowAddEditStudent(true);
      setshowsearchstudent(false);
      setShowAddEditFaculty(false);
      setshowsearchfaculty(false);
    } else if (component === "Searchstudent") {
      setshowsearchstudent(true);
      setShowAddEditStudent(false);
      setShowAddEditFaculty(false);
      setshowsearchfaculty(false);
    }
  };

  const handlesuboptionfaculty = (component) => {
    setShowAddEditFaculty(false);

    if (component === "AddEditFaculty") {
      setShowAddEditFaculty(true);
      setShowAddEditStudent(false);
      setshowsearchstudent(false);
      setshowsearchfaculty(false);
    } else if (component === "Searchfaculty") {
      setshowsearchfaculty(true);
      setShowAddEditFaculty(false);
      setShowAddEditStudent(false);
      setshowsearchstudent(false);
    }
  };

  return (
    <div className="container">
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

      <Navbar/>

      <div className="side-bar">
        <nav className="left-navbar">
          <button className="w-30 h-15">
            <a href="/Adminhomepage">
              {" "}
              <img className="home" src={home} alt="home icon" />
              &nbsp; Home
            </a>
          </button>
          <button className="sidelink" onClick={toggleFacultyOptions}>
            <img className="student" src={student} alt="student icon" />
            &nbsp; Student
          </button>
          {showFacultyOptions && (
            <>
              <button
                className="sidebaritem bg-transparent"
                onClick={() => handlesuboptionstudent("AddEditStudent")}
              >
                <div className="flex ">
                  <img
                    className="addstudent flex"
                    src={addstudent}
                    alt="add student icon"
                  />
                  &nbsp; Add / Edit Student
                </div>
              </button>

              <button
                className="sidebaritem bg-transparent"
                onClick={() => handlesuboptionstudent("Searchstudent")}
              >
                <div className="flex ">
                  <img className="search" src={search} alt="search icon" />
                  &nbsp; Search Student
                </div>
              </button>
            </>
          )}

          <button className="sidelink" onClick={toggleStudentOptions}>
            <img className="faculty" src={faculty} alt="faculty icon" />
            &nbsp; Faculty
          </button>
          {showStudentOptions && (
            <div>
              <button
                className="sidebaritem bg-transparent"
                onClick={() => handlesuboptionfaculty("AddEditFaculty")}
              >
                <div className="flex ">
                  <img
                    className="addfaculty"
                    src={addfaculty}
                    alt="add faculty icon"
                  />
                  &nbsp; Add / Edit Faculty
                </div>
              </button>
              <button
                className="sidebaritem bg-transparent"
                onClick={() => handlesuboptionfaculty("Searchfaculty")}
              >
                <div className="flex ">
                  <img className="search" src={search} alt="search icon" />
                  &nbsp; Search Faculty
                </div>
              </button>
            </div>
          )}

          {showAddEditStudent && <Addeditstudentlayout />}
          {showsearchstudent && <Searchstudent />}
          {showAddEditFaculty && <Addeditfaculty />}
          {showsearchfaculty && <Searchfaculty />}
          {/* {!showStudentOptions && <AddStudent />}
          {!showFacultyOptions && <AddFaculty />} */}
        </nav>
      </div>
    </div>
  );
};

export default Adminhomepage;
