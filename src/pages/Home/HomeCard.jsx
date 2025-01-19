import React from "react";
import { Link } from "react-router-dom";

function HomeCard({title, text, href, image}) {
    return (
        <div className="container_2">
            <div className="cardd">
                <h2 className="cardd__title">{title}</h2>
                <p className="cardd__text">
                    {text}
                    <br />
                    <Link to="/maps" className="cardd__map">
                        Посмотреть на карте
                    </Link>
                </p>
                
                <span className="cardd__hover">hover here</span>
                <div className="cardd__pic" style={{ backgroundImage: `url(${image})` }}></div>
                <button className="cardd__btn"></button>
            </div>
        </div>
    );
}

export default HomeCard;