import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const Book = ({book}) => {
  const {id, img, title, text, price, rating} = book
  return (
    <Link to={`/books/${id}`}>
    <article className="book-card">
      <div className="book-img-container">
        <img src={img} className="book-img" alt="" />
        <p className="book-date">{`#${id}`}</p>
      </div>
      <div className="book-info">
        <div className="book-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="book-footer">
          <StarRating rating={rating}/>
          <p>${price}</p>
        </div>
      </div>
    </article>
    </Link>
  )
}

export default Book;
