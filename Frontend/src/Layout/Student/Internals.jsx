import React from 'react'
import '../../Components/Style/style.css';
import Navbar from '../../Components/Student/Navbar';
import Sidebar from '../../Components/Student/Sidebar';
import Card from "react-bootstrap/Card";
const Internals = () => {
  return (
    <div className='container'>
    <Navbar/>
    <Sidebar/>
      <Card
        border="light"
        style={{
          width: "85rem",
          marginBlockStart: "200px",
          marginLeft: "100px",
        }}
      >
        {/* <Card.Header>Name</Card.Header> */}
        <Card.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            fontWeight: "bold",
          }}
        >
          <div>
            <span>Name:</span>
            <span
              className="header-info"
              style={{ marginLeft: "350px", fontWeight: "bold" }}
            >
              Registration Number:
            </span>
            <span
              className="header-info"
              style={{ marginLeft: "345px", fontWeight: "bold" }}
            >
              Semester:
            </span>
          </div>
        </Card.Header>
        <Card.Body>
          {/* <Card.Title>Grade Sheet</Card.Title> */}
          <table
            style={{
              border: "1px solid black",
              width: "80rem",
              height: "25rem",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Internal marks
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Maximum marks
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Marks obtained
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ marginTop: "12px" }}>
                <td
                  style={{
                    border: "1px solid black",
                    fontWeight: "500",
                    backgroundColor: "",
                  }}
                >
                  Internal sessional1
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  Total marks
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
              </tr>
              {/* <th></th> */}
            </tbody>
            
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Assignments
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Maximum marks
                </th>
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "lightblue",
                    color: "black",
                  }}
                >
                  Marks obtained
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  Assignment1
                </td>
                <td
                  style={{ border: "1px solid black", fontWeight: "500" }}
                ></td>
                <td
                  style={{ border: "1px solid black", fontWeight: "500" }}
                ></td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  Assignment2
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  Assignment3
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
              </tr>
              <tr>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  Total marks
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
                <td style={{ border: "1px solid black", fontWeight: "500" }}>
                  {" "}
                </td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Internals
