import React from "react";
import "./singleBook.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleBook = ({ id, title, img }) => {
  console.log(id)
  return (
  <Col sm={6} md={4} lg={3}>
     <div className="single-book">
        <img className="coverBook" src={img} alt={title} /> 
    
        <Link to={`/books/${id}`}className="titleBook">{title}</Link>
       
      </div>
  </Col>
   
  
  );
};

export default SingleBook;
