import React,{useState} from 'react'
import "../../Components/Style/samp.css";
const AddFaculty = () => {
    return <div>Student</div>;
  };
  
  const AddStudent = () => {
    return <div>Faculty</div>;
  };
  
  const Sample = () => {
    const [showFacultyOptions, setShowFacultyOptions] = useState(false);
    const [showStudentOptions, setShowStudentOptions] = useState(false);
  
    const toggleFacultyOptions = () => {
      setShowFacultyOptions(!showFacultyOptions);
      setShowStudentOptions(false);
    };
  
    const toggleStudentOptions = () => {
      setShowStudentOptions(!showStudentOptions);
      setShowFacultyOptions(false);
    };
  
    return (
      <div>
        <div>
          <button onClick={toggleFacultyOptions}>Student</button>
          {showFacultyOptions && (
            <div class="btn-container">
              <button onClick={() => console.log("Option 1 clicked")}>
                Add / Edit Student
              </button>
              <button className='btn2' onClick={() => console.log("Option 2 clicked")}>
                Search Student
              </button>
            </div>
          )}
        </div>
  
        <div>
          <button onClick={toggleStudentOptions}>Faculty</button>
          {showStudentOptions && (
            <div class="btn-container">
              <button onClick={() => console.log("Option A clicked")}>
              Add / Edit Faculty
              </button>
              <button onClick={() => console.log("Option B clicked")}>
              Search Faculty
              </button>
            </div>
          )}
        </div>
  
        {showFacultyOptions && <AddFaculty />}
        {showStudentOptions && <AddStudent />}
      </div>
    );
  };


export default Sample
