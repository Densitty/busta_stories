import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const ReviewBody = ({ name, comment, stars, image }) => {
  const rating = (givenRating) => {
    const container = [];
    const totalRatingValue = 5;

    for (let i = 1; i <= totalRatingValue; i++) {
      if (i <= givenRating) {
        container.push(
          <BsFillStarFill
            key={i}
            size={13}
            color="#df2189"
            className="reviews__body__contents__info__rating__icon"
          />
        );
      } else {
        container.push(
          <BsStar
            size={13}
            key={i}
            color="#df2189"
            className="reviews__body__contents__info__rating__icon"
          />
        );
      }
    }

    /* return container.map((item) => {
      return item;
    }); */
    return container;
  };
  return (
    <section className="col-4 pad-15">
      <article className="reviews__body">
        <div className="reviews__body__contents">
          <div className="reviews__body__contents__image">
            <LazyLoadImage src={image} alt={name} />
          </div>

          <div className="reviews__body__contents__info">
            <div className="reviews__body__contents__info__name">{name}</div>

            <div className="reviews__body__contents__info__rating">
              {rating(stars)}
            </div>
            <div className="reviews__body__contents__info__comment">
              {comment}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ReviewBody;
