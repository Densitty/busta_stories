import React, { useContext, useReducer } from "react";
import servicesReducer from "./servicesReducer";
import questions from "../../data/questions";
import reviews from "../../data/reviews.js";

const ServicesContext = React.createContext();

// console.log(reviews);

const initialState = {
  questions,
  reviews,
};

const ServicesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(servicesReducer, initialState);

  const servicesContextData = {
    state,
    dispatch,
  };
  return (
    <ServicesContext.Provider value={servicesContextData}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServicesContext = () => {
  return useContext(ServicesContext);
};

export { ServicesProvider };
