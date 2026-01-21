import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const CostumError = ({ variant, text }) => {
  const [isVisible, setIsVisible] = useState(true);
  

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return()=> clearTimeout(timer)
  },[]);

  return (
    <Container className="my-2">
      {isVisible && (
        <Row>
          <Col>
            <Alert className="p-1 bg-transparent w-100 m-0 border-0" variant={variant}>{text}</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CostumError;
