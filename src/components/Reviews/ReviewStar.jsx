import React, { useState } from "react";
import PropTypes from "prop-types";
import newStar from '../../assest/image/reviews/start.svg';
import oldStar from '../../assest/image/reviews/startNoYelloy.svg';

function StarRating({ onRatingChange }) {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starNumber) => {
    setRating(starNumber);
    onRatingChange(starNumber);
  };

  return (
    <div className="revievs__star">
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <img
          className="revievs__star-one"
          key={starNumber}
          src={starNumber <= rating ? newStar : oldStar}
          alt={`star${starNumber}`}
          onClick={() => handleStarClick(starNumber)}
        />
      ))}
    </div>
  );
}

StarRating.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
}

export default StarRating;