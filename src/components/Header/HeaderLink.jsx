import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({title, icon, href}){
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

export default HeaderLink;