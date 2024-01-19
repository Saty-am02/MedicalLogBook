import React, { useState } from "react";
//import "../../Components/Style/style.css";
import Card from "react-bootstrap/Card";
//import Adminsidebar from "../../Components/Admin/Adminsidebar";
//import Adminnavbar from "../../Components/Admin/Adminnavbar";
//import Button from "react-bootstrap/esm/Button";

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

    const cardDatastudent = [
        {
            title: " Student Details",
            label: " Name as per 12th gradesheet:",
            type: "text",
            additionalFields: [
                { label: " Enrollment number:", type: "number" },
                { label: " Application number:", type: "number" },
                { label: " Academic year:", type: "number" },
                { label: " Program/Branch:", type: "text" },
                { label: " Date of joining:", type: "date" },
                { label: " Date of birth:", type: "date" },
                { label: " Gender:", type: "text" },
                { label: " Present mobile number:", type: "number" },
                { label: " Previous mobile number:", type: "number" },
                { label: " Email id:", type: "mail" },
                { label: " Blood group:", type: "text" },
                { label: " Category of admission:", type: "text" },
                { label: " Nationality:", type: "text" },
                { label: " Religion:", type: "text" },
            ],
        },
        {
            title: "",
            label: " Social category:",
            size: 6,
            additionalFields: [
                { label: "Mother tongue:", type: "text" },
                { label: "Marital status:", type: "text" },
                { label: "Domicile status:", type: "text" },
                { label: "Adhar card:", type: "number" },
                { label: "Name as on Adhar card:", type: "text" },
                { label: "Official correspondence email:", type: "mail" },
                { label: "Official correspondence number:", type: "number" },
                { label: "Emergency contact number:", type: "number" },
                { label: "Social media account:", type: "text" },
                { label: "Number of credits earned:", type: "number" },
            ],
        },
    ];

    const cardDataparent = [
        {
            title: "Parent Details",
            label: "Father's Name:",
            type: "text",
            additionalFields: [
                { label: "Father's contact number:", type: "number" },
                { label: "Father's occupation:", type: "text" },
                { label: " Father's email id:", type: "mail" },
                { label: " Mother's Name:", type: "text" },
                { label: " Mother's contact number:", type: "number" },
                { label: "Mother's occupation:", type: "text" },
                { label: " Mother's email id:", type: "mail" },
                { label: " Guardian Name:", type: "text" },
                { label: " Guardian contact number:", type: "number" },
                { label: " Guardian occupation:", type: "text" },
                { label: " Guardian email id:", type: "mail" },
                { label: " Category of admission:", type: "text" },
            ],
        },
        {
            title: "Parent Bank Details",
            label: " Marital status:",
            size: 6,
            additionalFields: [
                { label: " Bank Account number:", type: "number" },
                { label: " Account holder name:", type: "text" },
                { label: " IFSC code:", type: "text" },
                { label: " Branch:", type: "text" },
                { label: " PAN card number:", type: "text" },
            ],
        },
    ];

    return (
        <div className="container">
            <section className="z-index">
                {/* <Adminsidebar />
                <Adminnavbar /> */}
            </section>
            <div className="fixed left-85 top-56 flex ml-40">
                <button
                    className={`w-48 h-10 ml-80 pl-1 pt-1 text-lg focus:outline-none ${addEditStudentClicked ? 'bg-white text-blue-500 focus:ring-4 rounded-lg focus:outline-none focus:ring-blue-300'
                            : 'bg-blue-500 text-white rounded-lg'

                        }`}
                    onClick={handleAddEditStudentClick}
                >
                    Add/Edit Student
                </button>

                <button
                    className={`w-48 h-10 ml-10 pl-1 pt-1 text-lg focus:outline-none ${parentDetailsClicked ? 'bg-white text-blue-500 focus:ring-4 rounded-lg focus:outline-none focus:ring-blue-300'
                            : 'bg-blue-500 text-white   rounded-lg '

                        }`}
                    onClick={handleParentDetailsClick}
                >
                    Parent Details
                </button>
            </div>

            {showStudentCard && (
                <div className="fixed overflow-hidden w-auto top-80 ml-100 h-100 pb-80 border-1 border-black rounded-2xl ">
                    <Card className="overflow-scroll w-89 h-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-60vw">

                            {cardDatastudent.map((card, idx) => (
                                <div key={idx} className={`col-span-${card.size}`}>
                                    <Card className="fixed m-20 w-95" border="light">
                                        <Card.Body>
                                            <Card.Title>{card.title}</Card.Title><br />
                                            <form className="mt-35  w-auto text-left h-120 text-5">
                                                <div className="mb-3">
                                                    <label className="form-label">{card.label}</label>
                                                    <input
                                                        type={card.type}
                                                        className="form-control"
                                                        placeholder={card.placeholder}
                                                    />
                                                </div>
                                                {idx === 0 && (
                                                    <>
                                                        {card.additionalFields.map((field, fieldIdx) => (
                                                            <div key={fieldIdx} className="mb-3">
                                                                <label className="form-label">
                                                                    {field.label}
                                                                </label>
                                                                <input
                                                                    type={field.type}
                                                                    className="form-control"
                                                                    placeholder={field.placeholder}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                                {idx === 1 && (
                                                    <>
                                                        <br />
                                                        {card.additionalFields.map((field, fieldIdx) => (
                                                            <div key={fieldIdx} className="mb-3">
                                                                <label className="form-label">
                                                                    {field.label}
                                                                </label>
                                                                <input
                                                                    type={field.type}
                                                                    className="form-control"
                                                                    placeholder={field.placeholder}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>
                                                )}
                                            </form>
                                        </Card.Body>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <button className="absolute bg-blue-500 rounded-md w-20 h-auto right-65 top-300 text-white text-22">
                            Save
                        </button>
                        <button className="absolute bg-blue-500 rounded-md w-20 h-auto left-250 top-300 text-white text-22">
                            Edit
                        </button>
                    </Card>
                </div>
      )}

                    {showParentCard && (
                       <div className="fixed overflow-hidden w-auto top-80 ml-100 h-100 pb-80 border-1 border-black rounded-2xl">
                       <Card className="overflow-scroll w-89 h-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-60vw">
                                {cardDataparent.map((card, idx) => (
                                    <div key={idx} className={`col-span-${card.size}`}>
                                        <Card className="fixed m-20 w-95" border="light">
                                            <Card.Body>
                                                <Card.Title>{card.title}</Card.Title><br/>
                                                <form className="mt-35  w-auto text-left h-120 text-5">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            {card.label}
                                                            <input
                                                                type={card.type}
                                                                className="form-control"
                                                                placeholder={card.placeholder}
                                                            />
                                                        </label>
                                                    </div>
                                                    {idx === 0 && (
                                                        <>
                                                            {card.additionalFields.map((field, fieldIdx) => (
                                                                <div key={fieldIdx} className="mb-3">
                                                                    <label className="form-label">
                                                                        {field.label}
                                                                        <input
                                                                            type={field.type}
                                                                            className="form-control"
                                                                            placeholder={field.placeholder}
                                                                        />
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                    {idx === 1 && (
                                                        <>
                                                            {card.additionalFields.map((field, fieldIdx) => (
                                                                <div key={fieldIdx} className="mb-3">
                                                                    <label className="form-label">
                                                                        {field.label}
                                                                        <input
                                                                            type={field.type}
                                                                            className="form-control"
                                                                            placeholder={field.placeholder}
                                                                        />
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </>
                                                    )}
                                                </form>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            <button className="absolute bg-blue-500 rounded-md w-20 h-auto right-65 top-200 text-white text-22">Save</button>
                            <button className="absolute bg-blue-500 rounded-md w-20 h-auto left-250 top-200 text-white text-22">Edit</button>
                        </Card>
                       </div> 
                    )}
                </div>
            );
};

            export default Addeditstudentlayout;
