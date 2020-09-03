import { combineReducers } from "redux";
import errorReducers from "./errorReducers";
import messageReducers from "./messageReducers";
import authReducers from "./authReducers";
import inventoryReducers from "./inventoryReducers";
import requestReducers from "./requestReducers";

export default combineReducers({
  requests: requestReducers,
  inventories: inventoryReducers,
  errors: errorReducers,
  messages: messageReducers,
  auth: authReducers,
});
