import React from "react";
import Book from "./Book";
import { useGlobalContext } from "../context";

const FeaturedBooks = () => {
  const { books } = useGlobalContext();

  const booksArray = Array.from(books.entries());
  return (
    <section className="section featuredbooks" id="books">
      <div className="section-title">
        <h2>
          featured <span>books</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {booksArray.slice(0, 6).map((bookArray) => {
          const [id, book] = bookArray
          return <Book key={id} book={book} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedBooks;
