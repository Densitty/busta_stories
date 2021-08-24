import React from "react";

const GenreDetails = ({ head, text }) => {
  return (
    <>
      <div className="genreInfo__details animate">
        <div className="genreInfo__details__head">{head}</div>
        <div className="genreInfo__details__text">{text}</div>
      </div>
    </>
  );
};

export default GenreDetails;
