import React, { useState } from "react";

const Addeditstudentlayout = () => {
  const [showStudentCard, setShowStudentCard] = useState(false);
  const [showParentCard, setShowParentCard] = useState(false);
  const [addEditStudentClicked, setAddEditStudentClicked] = useState(false);
  const [parentDetailsClicked, setParentDetailsClicked] = useState(false);

  const handleAddEditStudentClick = () => {
    setShowStudentCard(true);
    setShowParentCard(false);
    setAddEditStudentClicked(!addEditStudentClicked);
    setParentDetailsClicked(false);
  };

  const handleParentDetailsClick = () => {
    setShowStudentCard(false);
    setShowParentCard(true);
    setParentDetailsClicked(!parentDetailsClicked);
    setAddEditStudentClicked(false);
  };

  const [studentformData, setstudentformData] = useState({
    name: "",
    mothertoungue: "",
    enrollmentno: "",
    socialcategory: "",
    applicationnumber: "",
    maritalstatus: "",
    academicyear: "",
    domicilestatus:"",
    branch: "",
    adharcardno: "",
    doj: "",
    adharname: "",
    dob: "",
    ofcmail: "",
    gender: "",
    ofcnumber: "",
    presentno:"",
    emergencyno: "",
    previousno: "",
    socialmedia: "",
    emailid: "",
    credits: "",
    bloodgroup: "",
    admissioncategory: "",
    nationality: "",
    religion: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!studentformData.name.trim()) {
      newErrors.name = 'required';
    } else if (!/^[A-Za-z\s'-]{1,50}$/.test(studentformData.name)) {
      newErrors.name = 'Invalid Name format';
    }

    if (!studentformData.mothertoungue.trim()) {
      newErrors.mothertoungue = 'required';
    } else if (!/^[A-Za-z\s'-]{1,50}$/.test(studentformData.mothertoungue)) {
      newErrors.mothertoungue = 'Invalid Mothertoungue';
    }

    if (!studentformData.enrollmentno.trim()) {
      newErrors.enrollmentno = 'required';
    } else if (!/^[A-Za-z0-9]{1,20}$/.test(studentformData.enrollmentno)) {
      newErrors.enrollmentno = 'Invalid Enrollment number';
    }

    if (!studentformData.socialcategory.trim()) {
      newErrors.socialcategory = 'required';
    } else if (!/^[A-Za-z\s'-]{1,50}$/.test(studentformData.socialcategory)) {
      newErrors.socialcategory = 'Invalid Social category';
    }

    if (!studentformData.applicationnumber.trim()) {
      newErrors.applicationnumber = 'required';
    } else if (!/^[A-Za-z0-9]{1,20}$/.test(studentformData.applicationnumber)) {
      newErrors.applicationnumber = 'Invalid Application number';
    }

    if (!studentformData.maritalstatus.trim()) {
      newErrors.maritalstatus = 'required';
    } else if (!/^[A-Za-z\s'-]{1,20}$/.test(studentformData.maritalstatus)) {
      newErrors.maritalstatus = 'Invalid Marital status';
    }

    if (!studentformData.academicyear.trim()) {
      newErrors.academicyear = 'required';
    } else if (!/^\d{4}$/.test(studentformData.academicyear)) {
      newErrors.academicyear = 'Invalid Academic year';
    }

    if (!studentformData.domicilestatus.trim()) {
      newErrors.domicilestatus = 'required';
    } else if (!/^[A-Za-z\s'-]{1,20}$/.test(studentformData.domicilestatus)) {
      newErrors.domicilestatus = 'Invalid Domicile status';
    }

    if (!studentformData.branch.trim()) {
      newErrors.branch = 'required';
    } else if (!/^[A-Za-z0-9\s'-]{1,50}$/.test(studentformData.branch)) {
      newErrors.branch = 'Invalid Program/Branch';
    }

    if (!studentformData.adharcardno.trim()) {
      newErrors.adharcardno = 'required';
    } else if (!/^\d{12}$/.test(studentformData.adharcardno)) {
      newErrors.adharcardno = 'Invalid Adhar number';
    }

    if (!studentformData.doj.trim()) {
      newErrors.doj = 'required';
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(studentformData.doj)) {
      newErrors.doj = 'Invalid Date of joining';
    }

    if (!studentformData.adharname.trim()) {
      newErrors.adharname = 'required';
    } else if (!/^[A-Za-z\s'-\.]{1,50}$/.test(studentformData.adharname)) {
      newErrors.adharname = 'Invalid Adharcard name';
    }

    if (!studentformData.dob.trim()) {
      newErrors.dob = 'required';
    } else if (!/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(studentformData.dob)) {
      newErrors.dob = 'Invalid Date of birth';
    }

    if (!studentformData.ofcnumber.trim()) {
      newErrors.ofcnumber = 'required';
    } else if (!/^[6-9]\d{9}$/.test(studentformData.ofcnumber)) {
      newErrors.ofcnumber = 'Invalid official Mobile number';
    }

    if (!studentformData.presentno.trim()) {
      newErrors.presentno = 'required';
    } else if (!/^[6-9]\d{9}$/.test(studentformData.presentno)) {
      newErrors.presentno = 'Invalid Present Mobile number';
    }

    if (!studentformData.emergencyno.trim()) {
      newErrors.emergencyno = 'required';
    } else if (!/^[6-9]\d{9}$/.test(studentformData.emergencyno)) {
      newErrors.emergencyno = 'Invalid Emergency Mobile number';
    }

    if (!studentformData.previousno.trim()) {
      newErrors.previousno = 'required';
    } else if (!/^[6-9]\d{9}$/.test(studentformData.previousno)) {
      newErrors.previousno = 'Invalid Previous Mobile number';
    }

    if (!studentformData.socialmedia.trim()) {
      newErrors.socialmedia = 'required';
    } else if (!/^[a-zA-Z0-9_.]{1,30}$/.test(studentformData.socialmedia)) {
      newErrors.socialmedia = 'Invalid Social media account';
    }

    if (!studentformData.emailid.trim()) {
      newErrors.emailid = 'required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(studentformData.emailid)) {
      newErrors.emailid = 'Invalid Email id';
    }

    if (!studentformData.credits.trim()) {
      newErrors.credits = 'required';
    } else if (!/^\d+(\.\d{1,2})?$/.test(studentformData.credits)) {
      newErrors.credits = 'Invalid Credits earned';
    }

    if (!studentformData.bloodgroup.trim()) {
      newErrors.bloodgroup = 'required';
    } else if (!/^(A|B|AB|O)[+-]$/.test(studentformData.bloodgroup)) {
      newErrors.bloodgroup = 'Invalid blood group';
    }

    if (!studentformData.admissioncategory.trim()) {
      newErrors.admissioncategory = 'required';
    } else if (!/^[A-Za-z0-9\s'-]{1,50}$/.test(studentformData.admissioncategory)) {
      newErrors.admissioncategory = 'Invalid Admission category';
    }

    if (!studentformData.socialmedia.trim()) {
      newErrors.socialmedia = 'required';
    } else if (!/^[a-zA-Z0-9_.]{1,30}$/.test(studentformData.socialmedia)) {
      newErrors.socialmedia = 'Invalid Social media account';
    }

    if (!studentformData.socialmedia.trim()) {
      newErrors.socialmedia = 'required';
    } else if (!/^[a-zA-Z0-9_.]{1,30}$/.test(studentformData.socialmedia)) {
      newErrors.socialmedia = 'Invalid Social media account';
    }



   
   

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

  };
  const renderStudentForm = () => {
    return (
      <section>
         <div className="col-span-2 text-6 pb-1 pt-5">Student Details</div>
      <form className="w-275 h-140vh ml-10 text-5 text-left">
          <div className="grid grid-cols-2 gap-4 mt-8">
           
            <div>
              <label>Name as per 12th gradesheet:</label>
              <input type="text" className="border border-gray-700 w-125"/>
            </div>
            <div>
              <label>Mother tongue:</label>
              <input type="number" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Enrollment number:</label>
              <input type="number" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Social category:</label>
              <input type="number" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Application number:</label>
              <input type="number" className="border border-gray-700 w-125" />
            </div>

            <div>
              <label>Marital status:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Academic year:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Domicile status:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Program/Branch:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Adhar card:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Date of joining:</label>
              <input type="date" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Name as on Adhar card:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Date of birth:</label>
              <input type="date" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Official correspondance email:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Gender:</label>
              <select className="w-125 border border-gray-700">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label>Official correspondance number:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Present mobile number: </label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Emergency contact number:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Previous mobile number:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Social media account:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Email id:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Number of credits earned:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Blood group:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Category of admission:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Nationality:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
            <div>
              <label>Religion:</label>
              <input type="text" className="border border-gray-700 w-125" />
            </div>
          </div>
          <button
            type="submit"
            value="save"
            className="absolute bg-blue-500 rounded-md w-20 h-auto right-150 top-320 text-white text-22"
          >Save</button>
          <button className="absolute bg-blue-500 rounded-md w-20 h-auto left-150 top-320 text-white text-22">
            Edit
          </button>
      </form>
      </section>
    );
  };

  const renderParentForm = () => {
    return (
      <section>
      <div className="col-span-2 text-6 pb-1 pt-5">Parent Details</div>
      <form className="w-275 h-99 ml-10 text-5 text-left">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <label>Father's Name:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Marital status:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Father's contact number:</label>
            <input type="number" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Bank account number:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Father's Occupation:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Account holder Name:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Father's email id:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>IFSC code:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Mother's Name:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Branch:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Mother's contact number:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>PAN card number:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div>
            <label>Mother's Occupation:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div></div>
          <div>
            <label>Mother's email id:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div></div>
          <div>
            <label>Guardian Name:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div></div>
          <div>
            <label>Guardian contact number:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div></div>
          <div>
            <label>Guardian Occupation:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div></div>
          <div>
            <label>Guardian email id:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
          <div></div>
          <div>
            <label>Category of Admission:</label>
            <input type="text" className="border border-gray-700 w-125" />
          </div>
        </div>
        <button
          type="submit"
          className="absolute bg-blue-500 rounded-md w-20 h-auto right-85 top-190 text-white text-22"
        >
          Save
        </button>
        <button className="absolute bg-blue-500 rounded-md w-20 h-auto left-220 top-190 text-white text-22">
          Edit
        </button>
      </form>
      </section>
    );
  };

  return (
    <div className="container">
      {/* Your other components go here */}
      <div className="fixed left-85 top-56 flex ml-40">
      <button
          className={`w-48 h-10 ml-5 pl-1 pt-1 text-lg focus:outline-none ${
            addEditStudentClicked
              ? "bg-white text-blue-500 focus:ring-4 rounded-lg focus:outline-none focus:ring-blue-300"
              : "bg-blue-500 text-white rounded-lg"
          }`}
          onClick={handleAddEditStudentClick}
        >
          Add/Edit Student
        </button>

        <button
          className={`w-48 h-10 ml-10 pl-1 pt-1 text-lg focus:outline-none ${
            parentDetailsClicked
              ? "bg-white text-blue-500 focus:ring-4 rounded-lg focus:outline-none focus:ring-blue-300"
              : "bg-blue-500 text-white   rounded-lg "
          }`}
          onClick={handleParentDetailsClick}
        >
          Parent Details
        </button>
      </div>

      {showStudentCard && (
        <div className="fixed overflow-scroll w-auto h-100 top-80 ml-100 h-60vh pb-80 border-1 border-black rounded-2xl">
          {renderStudentForm()}
        </div>
      )}

      {showParentCard && (
        <div className="fixed overflow-scroll w-auto top-80 ml-100 h-100 pb-80 border-1 border-black rounded-2xl">
          {renderParentForm()}
        </div>
      )}
    </div>
  );
};

export default Addeditstudentlayout;
