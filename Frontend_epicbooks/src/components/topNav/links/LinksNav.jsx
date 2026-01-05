import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './linksNav.css'
import { Link } from "react-router-dom";

const LinksNav = () => {
  return (
    <Container className="d-none d-md-block">
      <Row>
        <Col className="d-flex gap-5 pb-3">
        
          <Link to="/" className="nav-link">
            Chi sono
          </Link>
          <Link to="/" className="nav-link">
            Contatti
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LinksNav;
