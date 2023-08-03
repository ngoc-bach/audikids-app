import React from "react";
import Book from "../components/Book";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { useState } from "react";
import SearchBar from "../components/Search";
import Loading from "../components/Loading";
import { useEffect } from "react";
import Pagination from "../components/Pagination";

const BookList = ({ books }) => {
  const [booksArray, setBooksArray] = useState([]);
  const [loading, setLoading] = useState(false);

  // step 2: set the number of books per page
  const booksPerPage = 6;

  // step 3: create state for managing pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const totalPages = Math.ceil(booksArray.length / booksPerPage);

  // step 4: Implement pagination logic
  const goToNextPage = () => {
    fetchBooks(currentPage + 1);
  };

  const goToPreviousPage = () => {
    fetchBooks(currentPage - 1);
  };

  const goToPage = (pageNumber) => {
    fetchBooks(pageNumber);
  };

  const baseURL = import.meta.env.VITE_BASE_URL;

  const fetchBooks = async (pageNumber) => {
    setLoading(true);
    const url = `${baseURL}/books?limit=${booksPerPage}&page=${pageNumber}`;
    const response = await fetch(url);
    const result = await response.json();
    setLoading(false);
    const books = new Map(result.books.map((book) => [book._id, book]));
    setBooksArray(Array.from(books.entries()));
    setTotalPages(result.totalPages);
    setCurrentPage(result.currentPage);
  };

  useEffect(() => {
    fetchBooks(1);
  }, []);

  const search = async (searchText) => {
    setLoading(true);
    const response = await fetch(`${baseURL}/books/?searchText=${searchText}`);
    let bookSearch = await response.json();
    setLoading(false);
    const bookResults = new Map(
      bookSearch.books.map((book) => [book._id, book])
    );
    setBooksArray(Array.from(bookResults.entries()));
  };

  if (loading) {
    return (
      <Container style={{ marginTop: "7rem", marginBottom: "7rem" }}>
        <h2 style={{ marginBottom: "2rem" }}>Audi Kids Best Sellers</h2>
        <SearchBar search={search} />
        <Loading></Loading>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "7rem", marginBottom: "7rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>Audi Kids Best Sellers</h2>
      <SearchBar search={search} />
      <Row xs={1} md={2} xl={3} className="g-0">
        {booksArray.map((bookArray) => {
          const [id, book] = bookArray;
          return <Book key={id} book={book} />;
        })}
      </Row>
      <Pagination
        {...{
          goToNextPage,
          goToPreviousPage,
          goToPage,
          currentPage,
          totalPages,
        }}
      />
    </Container>
  );
};

export default BookList;
