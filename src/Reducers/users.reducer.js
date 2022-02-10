import { SET_USERS } from "../consts";

const initialState = [];

export const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};