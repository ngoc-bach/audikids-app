import React from "react";
import { books } from "../data";

const BookList = () => {
  return (
    <section className="section" id="books">
    <div className="section-title">
      <h2>featured <span>books</span></h2>
    </div>

    <div className="section-center featured-center">
      {books.map((book, index) => {
        const {id, img, title, text, price} = book
        return (
        <article key={id} className="book-card">
          <div className="book-img-container">
            <img src={img} className="book-img" alt="" />
            <p className="book-date">{`#${index + 1}`}</p>
          </div>
          <div className="book-info">
            <div className="book-title">
              <h4>{title}</h4>
            </div>
            <p>{text}</p>
            <div className="book-footer">
              <p>${price}</p>
            </div>
          </div>
        </article>
        )
      })}
    </div>
  </section>
  )
}

export default BookList;
