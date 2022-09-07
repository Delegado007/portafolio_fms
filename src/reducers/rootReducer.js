import { combineReducers } from "redux";
import uiReducer from "../slices/uiSlice";

export const rootReducer = combineReducers({
  ui: uiReducer,
});