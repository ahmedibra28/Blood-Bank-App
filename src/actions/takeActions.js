import {
    GET_TAKES,
    ADD_TAKE,
    DELETE_TAKE,
    UPDATE_TAKE,
    URL,
  } from "./types";
    import { createMessage, returnErrors } from "./messageActions";
    import axios from "axios";
    import { tokenConfig } from "./authActions";
  
    
    
    export const getTakes = () => (dispatch, getState) => {
      axios
        .get(
          `${URL}api/blood-taking/`,
          tokenConfig(getState)
        )
        .then((takes) => {
          dispatch({
            type: GET_TAKES,
            payload: takes.data,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
    export const addTake = (take) => (dispatch, getState) => {
      axios
        .post(`${URL}api/blood-taking/`, take, tokenConfig(getState))
        .then((res) => {
          dispatch(
            createMessage({
              addTake: "Blood Taking Added",
            })
          );
          dispatch({
            type: ADD_TAKE,
            payload: res.data,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
    export const deleteTake = (id) => (dispatch, getState) => {
      axios
        .delete(`${URL}api/blood-taking/${id}/`, tokenConfig(getState))
        .then((takes) => {
          dispatch(
            createMessage({
              deleteTake: "Blood Taking Deleted",
            })
          );
          dispatch({
            type: DELETE_TAKE,
            payload: id,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
    export const updateTake= (take) => (dispatch, getState) => {
      console.log(take.id)
      axios
        .put(
          `${URL}api/blood-taking/${take.id}/`,
          take,
          tokenConfig(getState)
        )
        .then((res) => {
          dispatch(
            createMessage({
              updateTake: "Blood Taking Updated",
            })
          );    
          dispatch({
            type: UPDATE_TAKE,
            payload: res.data,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    