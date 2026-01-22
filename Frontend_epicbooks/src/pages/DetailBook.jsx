import React, { useEffect } from "react";
import SingleBook from "../components/main/mainPage/singleBook/SingleBook";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailBookSingle from "../components/main/mainPage/DetailBookSingle";
import CommentsUser from "../components/main/mainPage/singleBook/CommentsUser";
const DetailBook = () => {
  const [book, setBook] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
 const {id}=useParams()

  const selectBook = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/${id}`);
      const data = await res.json();
      console.log(data);
      setBook(data.book);
  
    } catch (error) {
      setError(error.message);
    }
  };
useEffect(()=>{
    selectBook()
},[])

  const [comments, setComments] = useState([]);
 
  const token = localStorage.getItem("jwtToken");
 

  useEffect(() => {
    if(!book){
      return
    }
     const allComments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/books/${book._id}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
       setComments(data.comments || []);
       console.log(data.comments)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

    allComments();
  }, [book]);
  return (
    <Container className="p-5">
      <Row className="flex-column justify-content-center align-items-center gap-3">
        {book && 
       <DetailBookSingle
       id={book._id}
       img={book.cover}
       title={book.title}
       content={book.content}
       price={book.price}
       />}
      </Row>
      <Row>
        {comments.map((comment)=>(
          <CommentsUser
          key={comment._id}
          content={comment.content}
          author={comment.author.name}
          rate={comment.rate}
          />
        ))}
        
      </Row>
    </Container>
  );
};

export default DetailBook;
