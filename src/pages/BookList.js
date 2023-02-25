import React from "react";
import Book from "../components/Book";

const BookList = ({ books }) => {
  return (
    <section className="section featuredbooks">
      <div className="section-title">
        <h2>
          <span>Audi Kids Best Sellers</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {books.map((book) => {
          return <Book book={book} key={book.id} />;
        })}
      </div>
    </section>
  );
};

export default BookList;
