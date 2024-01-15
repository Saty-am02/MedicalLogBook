import React from "react";
import "../../Components/Style/style.css";
import Card from "react-bootstrap/Card";
import Adminsidebar from "../../Components/Admin/Adminsidebar";
import Adminnavbar from "../../Components/Admin/Adminnavbar";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Parentdetail = () => {
  const cardData = [
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
    <div className="container">
      <Adminnavbar />
      <Adminsidebar />
      <Card className="parentcard">
        <Row xs={1} md={2} className="g-4">
          {cardData.map((card, idx) => (
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
    </div>
  );
};

export default Parentdetail;
