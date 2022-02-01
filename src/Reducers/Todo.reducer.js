import { SET_TODO } from "../consts";

const initialState = [];

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
