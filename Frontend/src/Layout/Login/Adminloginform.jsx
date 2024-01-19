import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const [formData, setFormData] = useState({
    email: "", // Change from 'email' to 'username'
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Make a POST request to the backend API endpoint for login
      const response = await fetch('http://localhost:8000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Login successful');
        navigate('/Adminhomepage')
        // You can perform additional actions here, such as redirecting the user
      } else {
        // Handle errors from the backend
        const responseData = await response.json();
        setErrors(responseData.errors || {});
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    // Add logic to handle login (e.g., send data to server)
    console.log("Login data submitted:", formData);
  };
  // Determine whether to show the Forgot Password button
  const isForgotPasswordVisible = !['admin@123.com', 'john@example.com'].includes(formData.email.toLowerCase());


  return (
    <div className="bgadmin-container">
      <div className='login-container my-5'>
        <div className="login-img"></div>
        <div className="login-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label
                style={{ color: "white", marginLeft: "-100px", }}
                className="my-4"
              ><h1 className=' mx-8 my-4' >Login </h1>

              </Form.Label>
              <Form.Label
                style={{ color: "white", marginLeft: "-220px", top: "100px", position: "absolute" }}

              ><h5>Email</h5>

              </Form.Label>
              <Form.Control
                style={{
                  width: "300px",
                  marginLeft: "120px",
                }}
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid"
                style={{ marginLeft: "-140px" }}>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label
                style={{ color: "white", marginLeft: "-350px", marginTop: "70px" }}
                className="my-4"
              >
                <h5>Password</h5>
              </Form.Label>
              <Form.Control
                style={{
                  width: "300px",
                  marginLeft: "120px",
                }}
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid"
                style={{ marginLeft: "-140px" }}>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            {isForgotPasswordVisible && (
              <Form.Label
                type="submit"
                style={{
                  marginLeft: "-100px",
                  marginTop: "20px",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  position: "absolute",
                  width: "250px",
                  opacity: "initial",
                  color: "white"
                }}
                className="btn"
              >
                Forgot Password
              </Form.Label>
            )}

            <Button
              variant="info"
              type="submit"
              style={{
                marginLeft: "-200px",
                position: "absolute",
                marginTop: "100px",
                paddingLeft: "40px",
                paddingRight: "40px",
                width: "160px",
              }}
            >
              Lets go &rarr;
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );

};

export default Loginform;
