import React from "react";
import "../assest/css/home.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ text, href, style }) {
  return (
    <div className="main__btn" style={style}>
      <Link to={href} className="main__btn-t">
        {text}
      </Link>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Button;
