import React from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useGlobalContext } from "../context";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Card from "react-bootstrap/Card";

const SingleBook = () => {
  const { add } = useGlobalContext();
  const [bookArray, setBookArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const { bookId } = useParams();

  const baseURL = import.meta.env.VITE_BASE_URL;

  const fetchBook = async () => {
    setLoading(true);
    const url = `${baseURL}/books/${bookId}`;
    const response = await fetch(url);
    const result = await response.json();
    setLoading(false);
    const book = new Map(
      result.map((bookDetail) => [bookDetail._id, bookDetail])
    );
    setBookArray(Array.from(book.values()));
  };

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) {
    return (
      <Container style={{ marginTop: "7rem", marginBottom: "7rem" }}>
        <Loading></Loading>
      </Container>
    );
  }

  return (
    <Container>
      {bookArray.map((book) => {
        const {
          _id,
          title,
          author,
          narrator,
          img_url,
          audio_sample_url,
          description,
          length,
          numReviews,
          rating,
        } = book;
        return (
          <section className="section" key={_id}>
            <div
              className="card mb-3"
              style={{ maxWidth: "900px", margin: "0 auto", border: "none" }}
            >
              <div className="row g-0">
                <Link to={"/books/"}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  back to list
                </Link>

                <div className="col-md-4">
                  <img
                    src={img_url}
                    className="img-fluid rounded-start"
                    alt={title}
                    style={{ margin: "1rem 0", width: "250px" }}
                  />
                  <audio controls style={{ maxWidth: "90%", height: "2rem" }}>
                    <source src={audio_sample_url} type="audio/mpeg" />
                  </audio>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3
                      className="card-title book-title"
                      style={{ marginBottom: "2rem" }}
                    >
                      {title}
                    </h3>
                    <Card.Subtitle className="mb-2 text-muted">
                      By: {author}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      Narrated by: {narrator}
                    </Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <div
                      className="book-footer"
                      style={{ marginBottom: "1rem" }}
                    >
                      <Card.Text>
                        <StarRating rating={rating} />
                      </Card.Text>
                      <Card.Text>{numReviews} ratings</Card.Text>
                    </div>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => add(book)}
                    >
                      add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </Container>
  );
};

export default SingleBook;
