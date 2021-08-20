import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { genres } from "../data/genres";
import FeatureStories from "../data/featuredStories";

const GenresContext = React.createContext();

const initialState = {
  genres,
  details: {},
  stories: FeatureStories,
  filteredStories: [],
};

const GenresProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const genresContextData = {
    state,
    dispatch,
  };
  return (
    <GenresContext.Provider value={genresContextData}>
      {children}
    </GenresContext.Provider>
  );
};

export const useGenresContext = () => {
  return useContext(GenresContext);
};

export { GenresProvider };
