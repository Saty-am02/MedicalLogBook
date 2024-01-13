import React from 'react'
import '../../Components/Style/style.css';
import Card from "react-bootstrap/Card";
import Adminsidebar from '../../Components/Admin/Adminsidebar';
import Adminnavbar from '../../Components/Admin/Adminnavbar';
import Button from 'react-bootstrap/esm/Button';
const Addeditstudent = () => {
  return (
    <div className='container'>
    <Adminsidebar/>
    <Adminnavbar/>
    <Button className='btnaddeditstudent' >Add / Edit Student</Button>
    <Button className='btnparentdetail' >Parent Detail</Button>
        <div className='border-container'>
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
          
        </Card.Header>
        <Card.Body>
         
        </Card.Body>
      </Card>
      </div>
    </div>
  )
}

export default Addeditstudent
