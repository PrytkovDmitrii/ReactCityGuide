import React from "react";
import error from "../assest/image/error404.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="error__wrap">
        <div className="error__left">
          <h1 className="error__title">
            404 <br /> Страница не найдена
          </h1>
          <p className="error__text">
            Извините, запрашиваемая страница не существует.
          </p>
        </div>
        <div className="error__right">
          <img src={error} alt="stroitel🥺" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
