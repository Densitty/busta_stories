import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import { DETAILS, STORIES } from "../utils/actions";
import { useGenresContext } from "../utils/GenresContext";
import Header from "../components/Header";
import GenreInfo from "../components/genre/GenreInfo";
import Stories from "../components/stories/Stories";
import Footer from "../components/footer/Footer";

const Details = () => {
  const dataFromGenres = useGenresContext();
  const { genreID } = useParams();
  const { dispatch, state } = dataFromGenres;

  const { details, filteredStories } = state;

  useEffect(() => {
    // fetch details of each story genre after the component has been mounted
    dispatch({ type: DETAILS, payload: { genreID } });

    // filter out the stories that belong to this particular genre(distingushed by its id) and update state
    dispatch({ type: STORIES, payload: { genreID } });

    // scroll the page to the top when me forward arrow btn is clicked
    window.scrollTo(0, 0);
  }, [genreID]);

  return (
    <>
      <Helmet>
        <title>{details.genre}</title>
      </Helmet>
      <Header heading={details.genre} image={details.image} />
      <GenreInfo {...details} />
      <Stories stories={filteredStories} genre={details.genre} />
      <Footer />
    </>
  );
};

export default Details;
