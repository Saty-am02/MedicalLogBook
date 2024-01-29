import React, { useState } from "react";

const Addeditfaculty = () => {
  const [formData, setFormData] = useState({
    name: "",
    applno: "", // Corrected typo in variable name from aaplno to applno
    language: "",
    bloodgrp: "",
    email: "",
    dob: "",
    doj: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handlephoneChange = (e) => {
    const truncatedValue = e.target.value.slice(0, 10);
    setFormData({ ...formData, [e.target.name]: truncatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name cannot exceed 50 characters";
    }

    if (!isValidDate(formData.dob, "dob")) {
      return;
    }

    if (!isValidDate(formData.doj, "doj")) {
      return;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/\d{10}/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Data saved successfully!");
    }
  };

  const isValidDate = (dateString, fieldName) => {
    const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-\d{4}$/;
    if (!dateRegex.test(dateString)) {
      setErrors({ ...errors, [fieldName]: "Please enter a valid date." });
      return false;
    }
  
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      setErrors({ ...errors, [fieldName]: "Please enter a valid date." });
      return false;
    }
  
    if (fieldName === "doj" && date < new Date(formData.dob)) { // Fix the comparison here
      setErrors({
        ...errors,
        doj: "Date of joining cannot be less than date of birth.", // Update the error message
      });
      return false;
    }
  
    setErrors({ ...errors, [fieldName]: "" });
  
    return true;
  };
  

  const handleSave = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }
    if (!formData.doj) {
      newErrors.doj = "Date of Joining is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      console.log("Data saved successfully!");
    }
  };

  return (
    <section>
      <div className="fixed left-85 top-56 ml-40">
        <button className="w-48 h-10 ml-5 pl-1 pt-1 text-lg mt-7 focus:outline-none rounded-lg bg-blue-500">
          Add/Edit Faculty
        </button>
      </div>
      <div className="flex justify-center item-center">
        <div className="fixed overflow-auto w-280 top-80 left-120 h-100 pb-120 border-1 border-black rounded-2xl text-5 text-left">
          <table className="ml-20 mb-100">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name<span style={{ color: "red" }}>*</span>
              </th>
              <td className="name">
                <input
                  type="text"
                  name="name"
                  className="border-1 border-black ml-60 px-9"
                  onChange={handleChange}
                  value={formData.name}
                  required
                ></input>
              </td>
              {errors.name && <td style={{ color: "red" }}>{errors.name}</td>}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Application number<span style={{ color: "red" }}>*</span>
              </th>
              <td className="applno">
                <input
                  type="number"
                  name="applno" // Corrected typo in attribute name from aaplno to applno
                  className="border-1 border-black ml-60 px-9"
                  required
                ></input>
              </td>
              {errors.applno && (
                <td style={{ color: "red" }}>{errors.applno}</td>
              )}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Mother tongue<span style={{ color: "red" }}>*</span>
              </th>
              <td className="language">
                <input
                  type="text"
                  name="language"
                  className="border-1 border-black ml-60 px-9"
                  required
                ></input>
              </td>
              {errors.language && (
                <td style={{ color: "red" }}>{errors.language}</td>
              )}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Date of joining<span style={{ color: "red" }}>*</span>
              </th>
              <td className="doj">
                <input
                  type="date"
                  name="doj"
                  className="border-1 border-black ml-60 px-16"
                  onChange={(e) => handleChange(e)}
                  value={formData.doj}
                  required
                ></input>
              </td>
              {errors.doj && (
                <p className="error" style={{ color: "red" }}>
                  {errors.doj}
                </p>
              )}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Date of birth<span style={{ color: "red" }}>*</span>
              </th>
              <td className="dob">
                <input
                  type="date"
                  name="dob"
                  className="border-1 border-black ml-60 px-16"
                  onChange={(e) => handleChange(e)}
                  value={formData.dob}
                  required
                ></input>
              </td>
              {errors.dob && (
                <p className="error" style={{ color: "red" }}>
                  {errors.dob}
                </p>
              )}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Gender<span style={{ color: "red" }}>*</span>
              </th>
              <td className="gender">
                <select className="ml-60 px-20" required>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </td>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Present mobile number<span style={{ color: "red" }}>*</span>
              </th>
              <td className="phone">
                <input
                  type="tel"
                  name="phoneNumber"
                  className="border-1 border-black ml-60 px-9"
                  onChange={handlephoneChange}
                  value={formData.phoneNumber}
                  required
                ></input>
              </td>
              {errors.phoneNumber && (
                <td style={{ color: "red" }}>{errors.phoneNumber}</td>
              )}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Previous mobile number<span style={{ color: "red" }}>*</span>
              </th>
              <td className="phone">
                <input
                  type="tel"
                  name="phoneNumber"
                  className="border-1 border-black ml-60 px-9"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Email id<span style={{ color: "red" }}>*</span>
              </th>
              <td className="email">
                <input
                  type="email"
                  name="email"
                  className="border-1 border-black ml-60 px-9"
                  onChange={handleChange}
                  value={formData.email}
                  required
                ></input>
              </td>
              {errors.email && (
                <td style={{ color: "red" }}>{errors.email}</td>
              )}
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Blood group<span style={{ color: "red" }}>*</span>
              </th>
              <td className="bloodgrp">
                <input
                  type="text"
                  name="bloodgrp"
                  className="border-1 border-black ml-60 px-9"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Nationality<span style={{ color: "red" }}>*</span>
              </th>
              <td className="nationality">
                <input
                  type="text"
                  name="nationality"
                  className="border-1 border-black ml-60 px-9"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Religion<span style={{ color: "red" }}>*</span>
              </th>
              <td className="religion">
                <input
                  type="text"
                  name="religion"
                  className="border-1 border-black ml-60 px-9"
                  required
                ></input>
              </td>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Social category
              </th>
              <td className="social">
                <input
                  type="text"
                  name="social"
                  className="border-1 border-black ml-60 px-9"
                ></input>
              </td>
            </tr>
          </table>
          <button
            className="absolute bg-blue-500 rounded-md w-20 h-auto left-110 top-270 text-white text-22"
            onClick={handleSave}
          >
            Save
          </button>
          <button className="absolute bg-blue-500 rounded-md w-20 h-auto right-90 top-270 text-white text-22">
            Edit
          </button>
          {Object.keys(errors).length > 0 && (
            <div className="mt-4 ml-60 text-red-500">
              <ul>
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Addeditfaculty;
