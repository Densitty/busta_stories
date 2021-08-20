import {
  OPEN_MODAL,
  CLOSE_MODAL,
  TOGGLE_NAV,
  DETAILS,
  STORIES,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === OPEN_MODAL) {
    // console.log(state);
    return {
      ...state,
      showModal: true,
      currentModal: action.payload.modalType,
    };
  }

  if (action.type === CLOSE_MODAL) {
    console.log(state);
    return { ...state, showModal: false, currentModal: "" };
  }

  if (action.type === TOGGLE_NAV) {
    // console.log(state);
    return {
      ...state,
      navState: !state.navState,
    };
  }

  if (action.type === DETAILS) {
    const chosenGenre = state.genres.find((genre) => {
      // genreID is passed from the router's useParams, which will return a string, hence why we need to convert it back to integer
      return genre.id === parseInt(action.payload.genreID);
    });
    // console.log(chosenGenre);
    return {
      ...state,
      details: chosenGenre,
    };
  }

  if (action.type === STORIES) {
    const filteredStories = state.stories.filter((story) => {
      const idFromStory = parseInt(story.genreId);
      const idFromGenre = parseInt(action.payload.genreID);

      return idFromStory === idFromGenre;
    });

    console.log(state);

    return {
      ...state,
      filteredStories,
    };
  }

  throw new Error("No matching action, " + action.type + ", type.");
};

export default reducer;
