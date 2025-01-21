import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HomeCard({ title, text, image }) {
  return (
    <div className="container_2">
      <div className="cardd">
        <h2 className="cardd__title">{title}</h2>
        <p className="cardd__text">
          {text}
          <br />
          <Link
            to="/maps"
            className="cardd__map"
            onClick={() => window.scrollTo(0, 0)}
          >
            Посмотреть на карте
          </Link>
        </p>

        <span className="cardd__hover">hover here</span>
        <div
          className="cardd__pic"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <button className="cardd__btn"></button>
      </div>
    </div>
  );
}

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default HomeCard;
