import {
  GET_INVENTORIES,
  ADD_INVENTORY,
  DELETE_INVENTORY,
  UPDATE_INVENTORY,
  URL,
} from "./types";
  import { createMessage, returnErrors } from "./messageActions";
  import axios from "axios";
  import { tokenConfig } from "./authActions";

  
  
  export const getInventories = () => (dispatch, getState) => {
    axios
      .get(
        `${URL}api/blood-store/`,
        tokenConfig(getState)
      )
      .then((inventories) => {
        dispatch({
          type: GET_INVENTORIES,
          payload: inventories.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const addInventory= (inventory) => (dispatch, getState) => {
    console.log(inventory)
    axios
      .post(`${URL}api/blood-store/`, inventory, tokenConfig(getState))
      .then((res) => {
        dispatch(
          createMessage({
            addInventory: "Inventory Added",
          })
        );
        dispatch({
          type: ADD_INVENTORY,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const deleteInventory = (id) => (dispatch, getState) => {
    axios
      .delete(`${URL}api/blood-store/${id}/`, tokenConfig(getState))
      .then((inventories) => {
        dispatch(
          createMessage({
            deleteInventory: "Inventory Deleted",
          })
        );
        dispatch({
          type: DELETE_INVENTORY,
          payload: id,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const updateInventory= (inventory) => (dispatch, getState) => {
    console.log(inventory.id)
    console.log(inventory)
    axios
      .put(
        `${URL}api/blood-store/${inventory.id}/`,
        inventory,
        tokenConfig(getState)
      )
      .then((res) => {
        dispatch(
          createMessage({
            updateInventory: "Inventory Updated",
          })
        );
        dispatch({
          type: UPDATE_INVENTORY,
          payload: res.data,
        });
      })
      .catch((err) =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  