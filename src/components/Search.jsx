import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({ search }) => {
  const [searchInput, setInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (event) => {
    search(searchInput);
    setSearchParams({ ["searchText"]: searchInput });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search(searchInput);
      setSearchParams({ ["searchText"]: searchInput });
      event.preventDefault();
    }
  };

  return (
    <Form className="d-flex" style={{ maxWidth: "50%", margin: "2rem auto" }}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
