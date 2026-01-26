import React from "react";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomError from "../customs/CustomError";
import "./form.css";
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    date: null,
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success,setSuccess]= useState(true)
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onChangeData = (e) => {
    setFormData({ ...formData, date: e.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/authors`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Compila i campi");
      }
      await res.json();
   setSuccess(true)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
       
          <Form className="form-registration p-0" onSubmit={onSubmit}>
             {success && <CustomError variant='success' text='Registrazione completata! Puoi effettuare il login'/>}
            <div className="error-registration">
              {" "}
              {error && (
                <CustomError variant="danger" text="Devi compilare i campi" />
              )}
            </div>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={onChange}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={formData.surname}
                onChange={onChange}
                name="surname"
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column">
              <Form.Label>Il tuo compleanno</Form.Label>
              <Calendar
                placeholder="Inserisci il tuo compleanno"
                appendTo={document.body}
                value={formData.date}
                onChange={onChangeData}
                name="date"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={onChange}
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci almeno 8 caratteri"
                value={formData.password}
                onChange={onChange}
                name="password"
              />
            </Form.Group>
            <Button className="btn-accedi" type="submit">
              {loading ? "Reagistrazione..." : "Reagistrati"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
