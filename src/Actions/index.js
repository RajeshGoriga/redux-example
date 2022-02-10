import { SET_REGISTRATION, SET_TODO, UPDATE_TODO, SET_USERS } from "../consts";
import { getUsers } from "../api";
export const setRegistrationData = (payload) => ({
  type: SET_REGISTRATION,
  payload,
});

export const setTodo = (payload) => ({
  type: SET_TODO,
  payload,
});
export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

/**
 * dispatchers
 */

export const dipatchGetUsers = () => {
  return async (dispatch) => {
    try {
      const users = await getUsers();
      dispatch(setUsers(users));
    } catch (e) {
      console.log("error", e);
    }
  };
};
