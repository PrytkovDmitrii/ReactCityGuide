import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assest/css/attraction.scss";

function AttractionCard({ image, text, id }) {
  return (
    <div className="card">
      <div className="attractions__image">
        <img src={image} alt="attraction" />
        <div className="attractions__area"></div>
      </div>
      <div className="attractions__texts">
        <p className="attractions__text">{text}</p>
        <Link to={`/all-attract/${id}`} className="attractions__text2">
          Подробнее
        </Link>
      </div>
    </div>
  );
}

AttractionCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default AttractionCard;
