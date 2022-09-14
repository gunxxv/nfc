import { FETCH_PROFILES, DELETE_PROFILE, EDIT_PROFILE, FETCH_PROFILE } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PROFILES:
      return action.payload;
    case FETCH_PROFILE:
      return action.payload;
    case DELETE_PROFILE:
      return action.payload;
    case EDIT_PROFILE:
      return action.payload;
    default:
      return state
  }
} 