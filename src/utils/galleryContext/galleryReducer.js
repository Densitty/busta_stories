import { OPEN_IMAGE, CLOSE_IMAGE } from "../actions";

const galleryReducer = (state, action) => {
  if (action.type === OPEN_IMAGE) {
    return {
      ...state,
      lightboxStatus: true,
      currentModalImage: action.payload.image,
    };
  }

  if (action.type === CLOSE_IMAGE) {
    return {
      ...state,
      lightboxStatus: false,
      currentModalImage: null,
    };
  }

  throw new Error("No matching action, " + action.type + ", type.");
};

export default galleryReducer;
