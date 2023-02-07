import React from "react";
import StarRating from "./StarRating";

const Book = ({book}) => {
  const {id, img, title, text, price, rating} = book
  return (
    <article className="book-card">
      <div className="book-img-container">
        <img src={img} className="book-img" alt="" />
        <p className="book-date">{`#${id + 1}`}</p>
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
  )
}

export default Book;
