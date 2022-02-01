import { SET_REGISTRATION, SET_TODO } from "../consts";
export const setRegistrationData = (payload) => ({
  type: SET_REGISTRATION,
  payload,
});

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload,
});
