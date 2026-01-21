import React, { useEffect, useState } from "react";
import SingleBook from "./singleBook/SingleBook";

import { Button, Col, Container, Row } from "react-bootstrap";
import "./mainpage.css";
import CustomLoading from "../../customs/CustomLoading";

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [visibleBook, setVisibleBook] = useState(6);
  const [expandedBook, setExpandedBook] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const allBooks = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/books`);
      const data = await res.json();
      console.log(data);
      setBooks(data.books);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    allBooks();
    const handleBooks = () => {
      allBooks();
    };

    window.addEventListener("books-updated", handleBooks);

    return () => {
      window.removeEventListener("books-updated", handleBooks);
    };
  }, []);

  const allBooksVisibile = visibleBook >= books.length;

  const moreOrLessBooks = () => {
    if (!allBooksVisibile) {
      setVisibleBook((book) => Math.min(book +3, books.length));
      setExpandedBook(false);
    } else {
      setVisibleBook((book) => Math.max(book - 3, 0));
    }
  };

  return (
    <Container>
      {loading && <CustomLoading />}
      <Row className="p-5 d-flex gap-5 align-items-center justify-content-center">
        <h3 className="title-mainpage">Le prime scelte</h3>

        {books.slice(0, visibleBook).map((book) => (
          <SingleBook
            key={book._id}
            title={book.title}
            alt={book.title}
            img={book.cover}
          />
        ))}
        <Button onClick={moreOrLessBooks}>
          {allBooksVisibile ? "Mostra meno.." : "Mostra di più"}
        </Button>
      </Row>
    </Container>
  );
};

export default MainPage;
