import React, { useState } from "react";
import '../Style/style.css'
import Button from "react-bootstrap/Button";

function Adminsidebar() {
  const [isStudentCollapsed, setIsStudentCollapsed] = useState(true);
  const [isFacultyCollapsed, setIsFacultyCollapsed] = useState(true);

  const handleToggleStudentCollapse = () => {
    setIsStudentCollapsed(!isStudentCollapsed);
    setIsFacultyCollapsed(true)

  };
  const handleToggleFacultyCollapse = () => {
    setIsFacultyCollapsed(!isFacultyCollapsed);
    setIsStudentCollapsed(true); 
  };


  return (
    <div className="container">
      <div className="side-bar">
        <nav className="left-navbar">
          <ul className="sidebarcont">
            <li className="sidebaritem">
              <a className="sidelink" href="#">
                Add Student
                <Button
                  onClick={handleToggleStudentCollapse}
                  aria-controls="gradeSheetTable"
                  aria-expanded={isStudentCollapsed}
                  variant="link"
                >
                  {isStudentCollapsed ? "+" : "-"}
                </Button>
              </a>
              <div
                id="minimize"
                className={`collapse${isStudentCollapsed ? "" : " show"}`}
              >
                {/* Additional items to be displayed when "Add Student" is clicked */}
                <ul className="nested-sidebarcont">
                  <li className="nested-sidebaritem">
                    <a className="nested-sidelink" href="#">
                      {" "}
                      Add / Edit Student
                    </a>
                  </li>
                  <li className="nested-sidebaritem">
                    <a className="nested-sidelink" href="#">
                      {" "}
                      Search Student
                    </a>
                  </li>
                </ul>
              </div>
            </li>


            <li className="sidebaritem">
              <a className="sidelink" href="#">
                Add Faculty
                <Button
                  onClick={handleToggleFacultyCollapse}
                  aria-controls="gradeSheetTable"
                  aria-expanded={isFacultyCollapsed}
                  variant="link"
                >
                  {isFacultyCollapsed ? "+" : "-"}
                </Button>
              </a>
              <div
                id="minimize"
                className={`collapse${isFacultyCollapsed ? "" : " show"}`}
              >
                {/* Additional items to be displayed when "Add Student" is clicked */}
                <ul className="nested-sidebarcont">
                  <li className="nested-sidebaritem">
                    <a className="nested-sidelink" href="#">
                      {" "}
                      Add / Edit Faculty
                    </a>
                  </li>
                  <li className="nested-sidebaritem">
                    <a className="nested-sidelink" href="#">
                      {" "}
                      Search Faculty
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Adminsidebar;
