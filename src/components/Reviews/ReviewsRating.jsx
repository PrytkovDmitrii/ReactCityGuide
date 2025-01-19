import React from "react";
import newStar from '../../assest/image/reviews/start.svg';

function ReviewRating({ averageRating, totalReviews }) {
    return (
        <div className="revievs__rating animate-up">
            <h2 className="revievs__rating-text">Общая оценка</h2>
            <div className="revievs__rating-wrap">
                <h1 className="revievs__rating-number">{averageRating.toFixed(2)}</h1>
                <div className="revievs__rating-star">
                    <img className="reviews__rating-star" src={newStar} alt="zvezdochka" />
                </div>
            </div>
            <p className="revievs__rating-count">Количество отзывов: {totalReviews}</p>
        </div>
    );
}

export default ReviewRating;