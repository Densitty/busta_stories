import React from "react";
import { useGenresContext } from "../../utils/GenresContext";
import GenresList from "./GenresList";

const Genres = () => {
  const dataFromGenres = useGenresContext();
  const { state } = dataFromGenres;
  // console.log(state);

  return (
    <section className="genres">
      <div className="container">
        <section className="row m-right-15 m-left-15">
          <article className="col-6 pad-15">
            <h3 className="genres__heading animate">
              Engage in the best of heart-warming stories
            </h3>
          </article>
          <article className="col-6 pad-15">
            <p className="genres__paragraph animate">
              Get ready for a bumpy ride in hear-warming stories of various
              guys' engagement experiences with thick, curvy and voluptuous
              ladies. Our ladies also share their stories and experiences with
              the guys that loved them. Get ready for an engrossing journey, as
              your senses are ready to be tittilated with stories about LASSES
            </p>
          </article>
        </section>
        <section className="genres__block">
          <div className="row m-right-15 m-left-15">
            {state.genres.map((genre) => {
              return <GenresList key={genre.id} genre={genre} />;
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Genres;
