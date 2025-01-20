import React, { useState, useEffect } from "react";
import StarRating from "./ReviewStar";
import Reviews from "./Reviews";

function ReviewForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [agree, setAgree] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    fetch("https://6756c695c0a427baf94a5624.mockapi.io/revievse")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !reviewText || rating === 0 || !agree) {
      setAlertMessage({
        text: "Заполните все обязательные поля!",
        type: "error",
      });
      return;
    }

    const reviewData = { name, email, review: reviewText, star: rating };

    try {
      const response = await fetch(
        "https://6756c695c0a427baf94a5624.mockapi.io/revievse",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reviewData),
        },
      );

      if (response.ok) {
        setAlertMessage({ text: "Отзыв успешно отправлен!", type: "success" });
        setName("");
        setEmail("");
        setReviewText("");
        setRating(0);
        setAgree(false);

        const updatedReviews = await fetch(
          "https://6756c695c0a427baf94a5624.mockapi.io/revievse",
        ).then((response) => response.json());
        setReviews(updatedReviews);
      }
    } catch {
      setAlertMessage({
        text: "Произошла ошибка при отправке отзыва.",
        type: "error",
      });
    }
  };

  const handleDelete = async (reviewId) => {
    try {
      const response = await fetch(
        `https://6756c695c0a427baf94a5624.mockapi.io/revievse/${reviewId}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        setReviews(reviews.filter((review) => review.id !== reviewId));
        setAlertMessage({ text: "Отзыв успешно удален!", type: "success" });
      }
    } catch {
      setAlertMessage({
        text: "Произошла ошибка при удалении отзыва.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <div className="container">
      {alertMessage && (
        <div
          className={`alert ${alertMessage.type === "error" ? "error" : ""}`}
        >
          <span>{alertMessage.text}</span>
          <button
            className="alert__button"
            onClick={() => setAlertMessage(null)}
          >
            &times;
          </button>
        </div>
      )}

      <div className="revievs__title">
        <h1 className="revievs__title-text">Оставьте свой отзыв</h1>
      </div>
      <div className="revievs__wrap">
        <form id="revievsForm" onSubmit={handleSubmit}>
          <div className="revievs__forms animate-left">
            <div className="revievs__forms-wrap">
              <div className="revievs__forms-left">
                <p className="revievs__text">Имя</p>
                <div className="revievs__input-name">
                  <input
                    className="revievs__input"
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="revievs__forms-right">
                <p className="revievs__text">E-mail адрес</p>
                <div className="revievs__input-email">
                  <input
                    className="revievs__input"
                    type="email"
                    placeholder="Введите E-mail адрес"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="revievs__rate">
              <p className="revievs__rate-text">Ваша оценка</p>
              <div className="revievs__star">
                <StarRating onRatingChange={setRating} />
              </div>
            </div>
            <div className="revievs__reviev">
              <p className="revievs__reviev-text">Оставьте отзыв</p>
              <div className="revievs__reviev-input">
                <textarea
                  className="revievs__reviev-textarea"
                  name="revievs"
                  placeholder="Введите свой отзыв"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="revievs__box">
              <input
                className="revievs__checkbox"
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p className="revievs__box-text">
                Я прочитал и принимаю Политику конфиденциальности
              </p>
            </div>
            <button type="submit" className="main__btn-t">
              Отправить
            </button>
          </div>
        </form>
        <div className="revievs__revievs">
          <Reviews reviews={reviews} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
