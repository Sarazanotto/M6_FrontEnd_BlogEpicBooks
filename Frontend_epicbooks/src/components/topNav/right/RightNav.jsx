import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './rightnav.css'
const RightNav = () => {
  return (
    <div sm={3} className="text-end">
      <Button className="btn-load-book display-inline">Carica il tuo libro</Button>
    </div>
  );
};

export default RightNav;
