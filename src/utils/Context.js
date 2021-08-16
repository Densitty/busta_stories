import React, { useContext, useReducer } from "react";
import { OPEN_MODAL, CLOSE_MODAL } from "./actions";
import reducer from "./reducer";

const SiteContext = React.createContext();

const initialState = {
  showModal: false,
  currentModal: "",
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

  const contextData = {
    ...state,
    openModal,
    closeModal,
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
