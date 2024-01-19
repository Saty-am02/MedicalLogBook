import React, { useState } from 'react';

function SearchStudent() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A student with name/registration number/course: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Student:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function StudentList() {
  return (
    <table>
      <thead>
        <tr>
          <th>SL No</th>
          <th>Enter RegNo, Name or Course</th>
          <th>Registration Number</th>
          <th>Student Name</th>
          <th>Search Student</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><input type="text" /></td>
          <td>123456</td>
          <td>John Doe</td>
          <td><button type="button">Search</button></td>
          <td>B.Tech</td>
        </tr>
      </tbody>
    </table>
  );
}

function Searchstudent() {
  return (
    <div>
      <h1>Student Information</h1>
      <SearchStudent />
      <StudentList />
    </div>
  );
}

export default Searchstudent;