import { SET_OPEN_MENU } from "../actions/types";

const initialState = {
  openMenu: false,
};

export const menuOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OPEN_MENU:
      return { ...state, openMenu: action.payload }
    default:
      return state;
  }
}