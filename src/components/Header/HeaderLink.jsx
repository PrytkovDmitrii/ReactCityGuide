import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HeaderLink({ title, icon, href }) {
  return (
    <div className="header__link">
      <div className="header__link_img">
        <img src={icon} alt="newspaper" />
      </div>
      <div className="header__link-t">
        <Link to={href} className="header__text">
          {title}
        </Link>
      </div>
    </div>
  );
}

HeaderLink.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderLink;
