import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_NAV } from "./actions";

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

  throw new Error("No matching action, " + action.type + ", type.");
};

export default reducer;
