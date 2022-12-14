import {
  FETCH_PROFILES,
  DELETE_PROFILE,
  EDIT_PROFILE,
  FETCH_PROFILE,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return action.payload || false;
    case FETCH_PROFILE:
      return action.payload || false;
    case DELETE_PROFILE:
      return action.payload || false;
    case EDIT_PROFILE:
      return action.payload || false;
    default:
      return state;
  }
};
