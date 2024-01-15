import React,{useState} from 'react'
import "../../Components/Style/style.css";
import Card from "react-bootstrap/Card";
import Adminsidebar from "../../Components/Admin/Adminsidebar";
import Adminnavbar from "../../Components/Admin/Adminnavbar";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Addeditstudentlayout = () => {

  const [showStudentCard, setShowStudentCard] = useState(false);
  const [showParentCard, setShowParentCard] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleAddEditStudentClick = () => {
    setShowStudentCard(true);
    setShowParentCard(false);
    setActiveButton('Add/Edit Student');
  };

  const handleParentDetailsClick = () => {
    setShowStudentCard(false);
    setShowParentCard(true);
    setActiveButton('Parent Details');
  };
  const cardDatastudent = [
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
  const cardDataparent = [
    {
      title: "Parent Details",
      label: "Father's Name:",
      additionalFields: [
        { label: "Father's contact number:" },
        { label: "Father's occupation:" },
        { label: " Father's email id:" },
        { label: " Mother's Name:" },
        { label: " Mother's contact number:" },
        { label: "Mother's occupation:" },
        { label: " Mother's email id:" },
        { label: " Guardian Name:" },
        { label: " Guardian contact number:" },
        { label: " Guardian occupation:" },
        { label: " Guardian email id:" },
        { label: " Category of admission:" },
      ],
    },
    {
      title: "Parent Bank Details",
      label: " Maritial status:",
      size: 6,
      additionalFields: [
        { label: " Bank Account number:" },
        { label: " Account holder name:" },
        { label: " IFSC code:" },
        { label: " Branch:" },
        { label: " PAN card number:" },
      ],
    },
  ];


  return (
    <div className='container'>
       <Adminsidebar />
      <Adminnavbar />

      <Button
        className={`btnaddeditstudent ${activeButton === 'Add/Edit Student' ? 'active' : ''}`}
        onClick={handleAddEditStudentClick}
      >Add/Edit Student</Button>
      <Button
        className={`btnparentdetail ${activeButton === 'Parent Details' ? 'active' : ''}`}
        onClick={handleParentDetailsClick}
      >Parent Details</Button>

      {showStudentCard && (
       <Card className='studentcard'>
       <Row xs={1} md={2} className="g-4">
         {cardDatastudent.map((card, idx) => (
           <Col key={idx} xs={card.size} md={card.size}>
             <Card className='studentcard1'border='light'>
              
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
      )}

      {showParentCard && (
         <Card className="parentcard">
         <Row xs={1} md={2} className="g-4">
           {cardDataparent.map((card, idx) => (
             <Col key={idx} xs={card.size} md={card.size}>
               <Card className="parentcard1" border="light">
                 {/* <Card.Img variant="top" src={card.image} alt={`Card ${idx + 1}`} /> */}
                 <Card.Body>
                   <Card.Title>{card.title}</Card.Title>
                   <Form className="parentform">
                     <Form.Group as={Row} className="mb-3">
                       <Form.Label column sm="4">
                         {card.label}
                       </Form.Label>
                       <Col sm="8">
                         <Form.Control
                           type="text"
                           placeholder={card.placeholder}
                         />
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
                               <Form.Control
                                 type="text"
                                 placeholder={field.placeholder}
                               />
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
                               <Form.Control
                                 type="text"
                                 placeholder={field.placeholder}
                               />
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
         <Button className="btnparentsave">Save</Button>
         <Button className="btnparentedit">Edit</Button>
       </Card>
      )}
    </div>
  );
};
   

export default Addeditstudentlayout
