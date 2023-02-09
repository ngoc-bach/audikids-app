import React from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleBook = ({books}) => {

  const { bookId } = useParams()

  const detailedBook = books.find((book) => book.id.toString() === bookId);

  if (!detailedBook) {
    return (
    <section className="section">
      <div>Book Not Found</div>
    </section>
    )
  }

  const {img, title, text, price, rating} = detailedBook;
  return (
  // <section className="section">
  //   <div className="section-center about-center">
  //     <div className="about-img">
  //       <img
  //         src={img}
  //         className="about-photo"
  //         alt={title} />
  //     </div>
  //     <article className="about-info">
  //       <h3 className="book-title">{title}</h3>
  //       <p>{text}</p>
  //       <p>${price}</p>
  //       <StarRating rating={rating}/>
  //     </article>
  //   </div>
  // </section>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="start" src={img} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{text}</Card.Text>
    <Card.Text><StarRating rating={rating}/></Card.Text>
    <Card.Text>${price}</Card.Text>
    <Button variant="primary">Try free sample</Button>
  </Card.Body>
  </Card>
  )
}

export default SingleBook;
