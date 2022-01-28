import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const GenresList = ({ genre }) => {
  const { id, genre: gen, category, image, language, details } = genre;
  return (
    <article className="col-4 pad-15">
      <div className="genres__card animate">
        <div className="genres__card__img">
          <LazyLoadImage src={image} alt={category} />
        </div>
        <div className="genres__card__layer">
          <div className="genres__card__layer__content">
            <span className="type">{gen}</span>
            <span className="category">{category}</span>
          </div>
        </div>
        <div className="genres__card__info">
          <div className="genres__card__info__text">
            <Link to={`/genre/${id}`} className="btn--white">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default GenresList;
