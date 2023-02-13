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

  const {img, title, text, price, rating} = detailedBook;
  return (
  <section className="section">
    <div className="card mb-3" style={{maxWidth: '1200px', margin: '0 auto', border: 'none'}}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={"/books/"}><FontAwesomeIcon icon={faChevronLeft}/>back to list</Link>
          <img src={img}
              className="img-fluid rounded-start"
              alt={title}
              style={{margin: '1rem', width: '1000px', border: '1rem'}}/>
          <audio controls>
            <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' type="audio/mpeg" />
          </audio>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
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
