import React from "react";
import Book from "./Book";
import Row from "react-bootstrap/Row";
import { useGlobalContext } from "../context";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const FeaturedBooks = () => {
  const [featuredBooksArray, setFeaturedBooksArray] = useState([]);

  const baseURL = import.meta.env.VITE_BASE_URL;
  const fetchFeaturedBooks = async () => {
    const url = `${baseURL}/featuredbooks`;
    const response = await fetch(url);
    const result = await response.json();
    const featuredBooks = new Map(
      result.map((featuredBook) => [featuredBook._id, featuredBook])
    );
    setFeaturedBooksArray(Array.from(featuredBooks.entries()));
  };

  useEffect(() => {
    fetchFeaturedBooks();
  }, []);

  return (
    <section className="section featuredbooks" id="books">
      <Container>
        <div className="section-title">
          <h2>
            featured <span>books</span>
          </h2>
        </div>

        <Row xs={1} md={2} xl={3} className="g-0">
          {featuredBooksArray.map((featuredBookArray) => {
            const [id, featuredBook] = featuredBookArray;
            return <Book key={id} book={featuredBook} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedBooks;
