import React from "react";
import Book from "../components/Book";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import { useGlobalContext } from "../context";

const BookList = () => {
  const { books } = useGlobalContext();

  const booksArray = Array.from(books.entries())
  return (
    <Container style={{ marginTop: "7rem", marginBottom: "7rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>Audi Kids Best Sellers</h2>
      <Row xs={1} md={2} xl={3} className="g-0">
        {booksArray.map((bookArray) => {
          const [id, book] = bookArray;
          return <Book key={id} book={book} />;
        })}
      </Row>
    </Container>
  );
};

export default BookList;
