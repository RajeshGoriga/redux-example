import { SET_REGISTRATION } from "../consts";

const initialState = {};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION:
      return {...state, user:action.payload };
    default:
      return state;
  }
};
