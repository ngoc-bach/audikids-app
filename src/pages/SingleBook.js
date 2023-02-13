import React from "react";
import { Link, useParams} from "react-router-dom";
import StarRating from "../components/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";

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

  const {img, title, text, price, rating, audio, author} = detailedBook;
  return (
  <section className="section">
    <div className="card mb-3" style={{maxWidth: '900px', margin: '0 auto', border: 'none'}}>
      <div className="row g-0">
      <Link to={"/books/"}><FontAwesomeIcon icon={faChevronLeft}/>back to list</Link>
        <div className="col-md-4">
          <img src={img}
              className="img-fluid rounded-start"
              alt={title}
              style={{margin: '1rem 0', width: '250px'}}/>
          <audio controls>
            <source src={audio} type="audio/mpeg" />
          </audio>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title book-title">{title}</h3>
            <h4 className="card-title">{author}</h4>
            <p className="card-text">{text}</p>
            <p className="card-text"><StarRating rating={rating}/></p>
            <p className="card-text">${price}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SingleBook;
