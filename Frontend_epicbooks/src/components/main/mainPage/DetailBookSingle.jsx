
import React from "react";

import { Card, Col } from "react-bootstrap";


const DetailBookSingle = ({ id, title, img, content, price }) => {
 
  return (
    <>
      <Col className="d-flex justify-content-center">
        <img className="coverBookDetail" src={img} alt={title} />
      </Col>
      <Col>
        <h1>{title} </h1>
        <p>{content} </p>
        <p>€{price} </p>
      </Col>
    
    </>
  );
};

export default DetailBookSingle;
