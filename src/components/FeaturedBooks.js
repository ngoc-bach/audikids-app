import React from "react";
import Book from "./Book";
import Row from 'react-bootstrap/Row';
import { useGlobalContext } from "../context";
import { Container } from "react-bootstrap";

const FeaturedBooks = () => {
  const { books } = useGlobalContext();

  const booksArray = Array.from(books.entries());
  return (
    <section className="section featuredbooks" id="books">
      <Container>
        <div className="section-title">
          <h2>
            featured <span>books</span>
          </h2>
        </div>

        <Row xs={1} md={2} xl={3} className="g-0">
          {booksArray.slice(0, 6).map((bookArray) => {
            const [id, book] = bookArray
            return <Book key={id} book={book} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedBooks;
