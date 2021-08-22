import React, { useContext, useReducer } from "react";
import reducer from "./galleryReducer";
import gallery from "../../data/gallery";

const GalleryContext = React.createContext();

const initialState = {
  gallery,
  lightboxStatus: false,
  currentModalImage: null,
};

const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const galleryContextData = {
    ...state,
    dispatch,
  };

  return (
    <GalleryContext.Provider value={galleryContextData}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGalleryContext = () => {
  return useContext(GalleryContext);
};

export { GalleryProvider };
