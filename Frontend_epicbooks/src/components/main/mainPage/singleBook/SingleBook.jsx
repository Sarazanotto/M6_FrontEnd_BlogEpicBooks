import React from "react";
import "./singleBook.css";
import { Card, Col } from "react-bootstrap";
const SingleBook = ({ title, img }) => {
  return (
  <Col sm={6} md={4} lg={3}>
     <div className="single-book">
        <img className="coverBook" src={img} alt={title} /> 
        <h6 className="titleBook">{title}</h6>
      </div>
  </Col>
   
  
  );
};

export default SingleBook;
