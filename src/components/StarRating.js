import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const stars = [];
  const wholeStars = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < wholeStars) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else if (i === wholeStars && rating % 1 !== 0) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStarHalfStroke} className="half" />
      );
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="empty" />);
    }
  }
  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
