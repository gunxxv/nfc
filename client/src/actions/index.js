import axios from "axios";
import history from "../history";
import {
  FETCH_PROFILES,
  FETCH_USER,
  DELETE_PROFILE,
  EDIT_PROFILE,
  FETCH_PROFILE,
} from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitProfile = (values) => async (dispatch) => {
  const res = await axios.post("/api/profiles", values);
  history.push("/profiles");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProfiles = () => async (dispatch) => {
  const res = await axios.get("/api/profiles");

  dispatch({ type: FETCH_PROFILES, payload: res.data });
};

export const fetchProfile = (id) => async (dispatch) => {
  const res = await axios.get(`/api/profiles/${id}`);

  dispatch({ type: FETCH_PROFILE, payload: res.data });
};

export const deleteProfile = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/profiles/${id}`);
  dispatch({ type: DELETE_PROFILE, payload: res.data });
  history.push("/profiles");
};

export const editProfile = (id, values) => async (dispatch) => {
  const res = await axios.put(`/api/profiles/${id}`, values);
  history.push("/profiles");
  dispatch({ type: EDIT_PROFILE, payload: res.data });
};
