import { combineReducers } from "redux";
import { user } from "./Registration.reducers";
import { todo } from "./Todo.reducer";
import {users} from './users.reducer'

const rootReducer = combineReducers({
  user,
  todo,
  users
});
export default rootReducer
