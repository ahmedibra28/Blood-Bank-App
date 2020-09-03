import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import messageReducers from "./messageReducers";
import authReducers from "./authReducers";
import inventoryReducers from "./inventoryReducers";

export default combineReducers({
  inventories: inventoryReducers,
  errors: errorReducers,
  messages: messageReducers,
  auth: authReducers,
});
