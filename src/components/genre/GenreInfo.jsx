import React from "react";
import GenreDetails from "./GenreDetails";

const GenreInfo = ({ id, genre, details, language, category }) => {
  return (
    <section className="genreInfo">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-8">
            <p className="genreInfo__text">{details}</p>
          </div>
        </div>
        <h2 className="heading">Good to know</h2>
        <div className="row">
          <div className="col-8">
            <GenreDetails head="Languages Available" text={language} />
            <GenreDetails head="Category" text={category} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenreInfo;
