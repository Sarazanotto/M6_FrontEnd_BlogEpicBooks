import { Facebook } from "lucide";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import ModalRegisterUser from "../components/loginPage/ModalRegisterUser";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const showModalToRegistration = () => {
    setShowRegistration(true);
  };
  
  const hideModalToRegistration = () => {
    setShowRegistration(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Login fallito");
      }
      const data = await res.json();
      localStorage.setItem("jwtToken", data.token);
      navigate("/homepage");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const onClickGoogle = () => {
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/google`;
  };
  const onClickInstagram = () => {
    window.location.href = `${import.meta.env.VITE_SERVER_URL}/instagram`;
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={10} sm={8} md={4}>
          <Form className="d-flex flex-column gap-3" onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder="Inserisi la tua mail"
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                placeholder="Inserisi la password"
                onChange={onChange}
              ></Form.Control>
            </Form.Group>
            {error && <p className="text-danger">{error} </p>}
            <Button
              className="mt-5 btn-accedi"
              type="submit"
              disabled={loading}
            >
              {loading ? "Accesso..." : "Accedi"}
            </Button>
          </Form>
          <Row>
            <Col className="d-flex align-items-end gap-2 justify-content-center">
              <p className="m-0">se non sei ancora registarto </p>
              <Button
                className="btn-oauth btn-register"
                onClick={showModalToRegistration}
              >
                clicca qui!
              </Button>
            </Col>
          </Row>
          <Row>
            <p className="text-center p-0 mt-5 mb-1 small">
              oppure puoi accedere con
            </p>
            <Col className="d-flex gap-2 justify-content-center">
              <Button className="btn-oauth" onClick={onClickGoogle}>
                <img src="../../assets/google.png" />
              </Button>

              <Button className="btn-oauth" onClick={onClickInstagram}>
                <img src="../../assets/insta.png" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <ModalRegisterUser
        visible={showRegistration}
        onHide={hideModalToRegistration}
      />
    </Container>
  );
};

export default LoginPage;
