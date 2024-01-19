import React,{useState} from 'react'
//import '../../Components/Style/style.css';
import Card from "react-bootstrap/Card";
import Adminsidebar from '../../Components/Admin/Adminsidebar';
import Adminnavbar from '../../Components/Admin/Adminnavbar';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
const Addeditstudent = () => {
  const cardData = [
    {
      title: 'Student Details',
      label: "Father's Name:",
      additionalFields: [
        { label: "Name as per 12th gradesheet:"  },
        { label: "Enrollment number:"  },
        { label: " Application number:" },
        { label: " Academic year:" },
        { label: " Program/Branch:" },
        { label: "Date of joining:" },
        { label: " Date of birth:" },
        { label: " Gender:" },
        { label: " Present mobile number:" },
        { label: " Previous mobile number:" },
        { label: " Email id:" },
        { label: " Blood group:" },
        { label: " Category of admission:" },
        { label: " Nationality:" },
        { label: "Religion:" },
        
      ],
    },
    { title: '', label: ' Social category:', size:6,
    additionalFields: [
        { label: "Mother tongue:" },
        { label: "Maritial status:" },
      { label: 'Domicile status:' },
      { label: 'Adhar card:' },
      { label: 'Name as on Adhar card:' },
      { label: 'Official correspondance email:' },
      { label: "Official correspondance number:" },
      { label: "Emergency contact number:" },
      { label: "Social media account:" },
      { label: "Number of credits earned:" },
    ],
  
  },
  ];

  return (
    <div className='container'>
      <Adminnavbar/>
      <Adminsidebar/>
      <Card className='studentcard'>
      <Row xs={1} md={2} className="g-4">
        {cardData.map((card, idx) => (
          <Col key={idx} xs={card.size} md={card.size}>
            <Card className='studentcard1'border='light'>
              {/* <Card.Img variant="top" src={card.image} alt={`Card ${idx + 1}`} /> */}
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Form className='studentform'>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="4">
                      {card.label}
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control type="text" placeholder={card.placeholder} />
                    </Col>
                  </Form.Group>
                  {idx === 0 && (
                    <>
                      {card.additionalFields.map((field, fieldIdx) => (
                        <Form.Group as={Row} key={fieldIdx} className="mb-3">
                          <Form.Label column sm="4">
                            {field.label}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Control type="text" placeholder={field.placeholder} />
                          </Col>
                        </Form.Group>
                      ))}
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      {card.additionalFields.map((field, fieldIdx) => (
                        <Form.Group as={Row} key={fieldIdx} className="mb-3">
                          <Form.Label column sm="4">
                            {field.label}
                          </Form.Label>
                          <Col sm="8">
                            <Form.Control type="text" placeholder={field.placeholder} />
                          </Col>
                        </Form.Group>
                      ))}
                    </>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button className="btnstudentsave">Save</Button>
        <Button className="btnstudentedit">Edit</Button>
      </Card>
    </div>
  );
}

export default Addeditstudent
