import React,{useState} from 'react'
//import Adminsidebar from '../../Components/Admin/Adminsidebar'
import "../../Components/Style/samp.css";
import Adminnavbar from '../../Components/Admin/Adminnavbar'
import Addeditstudentlayout from './Addeditstudentlayout';
import Searchstudent from './Searchstudent';

const Adminhomepage = () => {
  const [showFacultyOptions, setShowFacultyOptions] = useState(false);
    const [showStudentOptions, setShowStudentOptions] = useState(false);
    const [showAddEditStudent, setShowAddEditStudent] = useState(false);
    const [showsearchstudent,setshowsearchstudent] = useState(false);

  const AddFaculty = () => {
    return <div></div>;
  };
  
  const AddStudent = () => {
    return <div></div>;
  };
  
  
    const toggleFacultyOptions = () => {
      setShowFacultyOptions(!showFacultyOptions);
      setShowStudentOptions(false);
    };
  
    const toggleStudentOptions = () => {
      setShowStudentOptions(!showStudentOptions);
      setShowFacultyOptions(false);
    };
    const handlesuboption = (component) =>{
      setShowAddEditStudent(false);
  
      if (component === "AddEditStudent") {
        setShowAddEditStudent(true);
        setshowsearchstudent(false);
      }
      else if(component === "Searchstudent"){
        setshowsearchstudent(true);
        setShowAddEditStudent(false);
      }
    }
   
  return (
    <div className='container'>
      {/* <Adminsidebar/> */}
      <Adminnavbar/>
      <div className="side-bar">
        <nav className="left-navbar">
          <button className='w-30 h-15'><a href='/Adminhomepage'>Home</a></button>
          <button className="sidelink" onClick={toggleFacultyOptions}>
            Student
          </button>
          {showFacultyOptions && (
            <div>
              <button
                className="sidebaritem"
                onClick={() => handlesuboption("AddEditStudent")}
              >
                Add / Edit Student
              </button>

              <button
                className="sidebaritem"
                onClick={() => handlesuboption("Searchstudent")}
              >
                Search Student
              </button>
            </div>
          )}

          <button className="sidelink" onClick={toggleStudentOptions}>
            Faculty
          </button>
          {showStudentOptions && (
            <div >
              <button 
              className="sidebaritem"
              onClick={() => console.log("Add / Edit Faculty clicked")}>
                Add / Edit Faculty
              </button>
              <button
              className="sidebaritem"
              onClick={() => console.log("Search Faculty clicked")}>
                Search Faculty
              </button>
            </div>
          )}

          {showAddEditStudent && <Addeditstudentlayout />}
          {showsearchstudent && <Searchstudent/>}
          {!showFacultyOptions && <AddFaculty />}
          {!showStudentOptions && <AddStudent />}
        </nav>
      </div>
    </div>
  )
}

export default Adminhomepage
