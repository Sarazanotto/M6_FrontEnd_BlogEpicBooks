import React from "react";
import { InputText } from "primereact/inputtext";
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomError from "../components/customs/CustomError";

const ModifyUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    date: null,
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  const payload = JSON.parse(atob(token.split(".")[1]));
  console.log(payload);
  const userId = payload.id;
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onChangeData = (e) => {
    setFormData({ ...formData, date: e.value });
  };

  useEffect(() => {
    // carica i dati dell'utente all'apertura
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/authors/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (!res.ok) throw new Error("Errore nel recupero dei dati");
        const data = await res.json();
        setFormData({
          name: data.user.name,
          surname: data.user.surname,
          date: data.user.date ? new Date(data.user.date) : null,
          email: data.user.email,
          password: "",
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/authors/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );
      if (!res.ok) {
        throw new Error("Compila i campi");
      }
      await res.json();
      navigate("/homepage");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col sm={6}>
          <h3>Modifica profilo</h3>
          <Form className="form-registration p-0" onSubmit={onSubmit}>
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
              {loading ? "Sto modificando..." : "Modifica"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ModifyUser;
