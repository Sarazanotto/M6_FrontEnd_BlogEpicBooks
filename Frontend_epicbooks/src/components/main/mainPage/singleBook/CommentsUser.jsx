import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const CommentsUser = ({id,content,author,rate}) => {

  return (
    <Col>
     <h6>{author}</h6>
     
     <p>{content} </p>
     <p>Valutazione: {rate} 🌟​ </p>
  
   
    </Col>
  );
};

export default CommentsUser;
