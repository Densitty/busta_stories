import React, { useContext, useReducer } from "react";
import servicesReducer from "./servicesReducer";
import questions from "../../data/questions";

const ServicesContext = React.createContext();

// console.log(questions);

const initialState = {
  questions,
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
