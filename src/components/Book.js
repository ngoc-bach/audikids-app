import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { useGlobalContext } from "../context";

const Book = ({ book }) => {
  const { id, img, title, author, text, price, rating } = book;
  const { add } = useGlobalContext();
  return (
    <>
      <Card
        className="book-card"
        style={{ width: "22rem", margin: "1rem auto", border: "none" }}
      >
        <Link to={`/books/${id}`}>
          <Card.Img className="book-img" variant="top" src={img} />
        </Link>
        <Card.Body>
          <Card.Title className="book-title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Text></Card.Text>
          <Card.Text>{text}</Card.Text>
          <div className="book-footer" style={{ marginBottom: "1rem" }}>
            <Card.Text>
              <StarRating rating={rating} />
            </Card.Text>
            <Card.Text>$ {price}</Card.Text>
          </div>
          <Button type="button" variant="primary" onClick={() => add(id)}>add to cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Book;
