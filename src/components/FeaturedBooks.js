import React from "react";
import Book from "./Book";

const FeaturedBooks = ({books}) => {
  return (
    <section className="section featuredbooks" id="books">
    <div className="section-title">
      <h2>featured <span>books</span></h2>
    </div>

    <div className="section-center featured-center">
      {books.slice(0,6).map((book) => {
        return (
          <Book book={book} key={book.id}/>
        )
      })}
    </div>
  </section>
  )
}

export default FeaturedBooks;
