import React from "react";
import trash from '../../assest/image/reviews/trash.svg';
import newStar from '../../assest/image/reviews/start.svg';
import oldStar from '../../assest/image/reviews/startNoYelloy.svg';
import magnifier from '../../assest/image/reviews/magnifier.svg';
import ReviewRating from "./ReviewsRating";

function Reviews({ reviews, onDelete }) {
    const totalRating = reviews.reduce((sum, review) => sum + review.star, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
    const totalReviews = reviews.length;

    return (
        <div>
            {reviews.length === 0 ? (
                <div className="revievs__none">
                    <h2 className="revievs__none-text">Тут пока что ничего нет...</h2>
                    <img className="revievs__none-img" src={magnifier} alt="лупо" />
                </div>
            ) : (
                <>
                    {reviews.map((review) => (
                        <div className="reviews" key={review.id}>
                            <div className="reviews__wrap">
                                <div className="reviews__left">
                                    <div className="reviews__wrap-name">
                                        <p className="reviews__name">{review.name}</p>
                                        <div className="reviews__star">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <img
                                                    key={star}
                                                    className="reviews__star-size"
                                                    src={star <= review.star ? newStar : oldStar}
                                                    alt={`star${star}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="reviews__text">{review.review}</p>
                                </div>
                                <div className="reviews__right">
                                    <img
                                        className="reviews__trash"
                                        src={trash}
                                        alt="ведерко"
                                        onClick={() => onDelete(review.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                
                    <ReviewRating averageRating={averageRating} totalReviews={totalReviews} />
                </>
            )}
        </div>
    );
}

export default Reviews;