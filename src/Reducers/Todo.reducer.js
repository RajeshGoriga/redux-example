import { SET_TODO, UPDATE_TODO } from "../consts";

const initialState = [];

export const todo = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      const newState =
        state &&
        state.map((item) => {
          if (item.id === action.payload.id) {
            item.id = action.payload.id;
            item.value = action.payload.value;
          }
          return item;
        });
      return newState;
    default:
      return state;
  }
};
