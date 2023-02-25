import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import Card from "react-bootstrap/Card";

const Book = ({ book }) => {
  const { id, img, title, author, text, price, rating } = book;
  return (
    <Link to={`/books/${id}`}>
      {/* <article className="book-card">
      <div className="book-img-container">
        <img src={img} className="book-img" alt={title} />
        <p className="book-date">{`#${id}`}</p>
      </div>
      <div className="book-info">
        <div className="book-title">
          <h4>{title}</h4>
        </div>
        <h5>{author}</h5>
        <p>{text}</p>
        <div className="book-footer">
          <StarRating rating={rating}/>
          <p>${price}</p>
        </div>
      </div>
    </article> */}

      <Card
        className="book-card"
        style={{ width: "22rem", margin: "0 auto", border: "none" }}
      >
        <Card.Img className="book-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="book-title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
          <Card.Text></Card.Text>
          <Card.Text>{text}</Card.Text>
          <div className="book-footer">
            <Card.Text>
              <StarRating rating={rating} />
            </Card.Text>
            <Card.Text>$ {price}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Book;
