import React, { useContext, useReducer } from "react";
import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_NAV } from "./actions";
import reducer from "./reducer";

const SiteContext = React.createContext();

const initialState = {
  showModal: false,
  currentModal: "",
  navState: false,
};

const SiteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    console.log(state);
    dispatch({ type: OPEN_MODAL, payload: { modalType: "registerModal" } });
  };

  const closeModal = () => {
    // setShowModal(false);
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  const closeNav = () => {
    dispatch({ type: TOGGLE_NAV });
  };

  const openNav = () => {
    dispatch({ type: TOGGLE_NAV });
  };

  const contextData = {
    ...state,
    openModal,
    closeModal,
    openNav,
    closeNav,
    dispatch,
  };

  return (
    <SiteContext.Provider value={contextData}>{children}</SiteContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(SiteContext);
};

export { SiteContext, SiteProvider };
