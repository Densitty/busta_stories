import { SHOW_FAQ } from "../actions";

const servicesReducer = (state, action) => {
  throw new Error("No matching action, " + action.type + ", type.");
};

export default servicesReducer;
