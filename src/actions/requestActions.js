import {
    GET_REQUESTS,
    ADD_REQUEST,
    DELETE_REQUEST,
    UPDATE_REQUEST,
    URL,
  } from "./types";
    import { createMessage, returnErrors } from "./messageActions";
    import axios from "axios";
    import { tokenConfig } from "./authActions";
  
    
    
    export const getRequests = () => (dispatch, getState) => {
      axios
        .get(
          `${URL}api/blood-request/`,
          tokenConfig(getState)
        )
        .then((requests) => {
          dispatch({
            type: GET_REQUESTS,
            payload: requests.data,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
    export const addRequest = (request) => (dispatch, getState) => {
      axios
        .post(`${URL}api/blood-request/`, request, tokenConfig(getState))
        .then((res) => {
          dispatch(
            createMessage({
              addRequest: "Request Added",
            })
          );
          dispatch({
            type: ADD_REQUEST,
            payload: res.data,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
    export const deleteRequest = (id) => (dispatch, getState) => {
      axios
        .delete(`${URL}api/blood-request/${id}/`, tokenConfig(getState))
        .then((requests) => {
          dispatch(
            createMessage({
              deleteRequest: "Request Deleted",
            })
          );
          dispatch({
            type: DELETE_REQUEST,
            payload: id,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    
    export const updateRequest= (request) => (dispatch, getState) => {
      console.log(request.id)
      axios
        .put(
          `${URL}api/blood-request/${request.id}/`,
          request,
          tokenConfig(getState)
        )
        .then((res) => {
          dispatch(
            createMessage({
              updateRequest: "Request Updated",
            })
          );
          dispatch({
            type: UPDATE_REQUEST,
            payload: res.data,
          });
        })
        .catch((err) =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
    };
    