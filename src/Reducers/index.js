import { combineReducers } from "redux";
import { user } from "./Registration.reducers";
import { todo } from "./Todo.reducer";

const rootReducer = combineReducers({
  user,
  todo
});
export default rootReducer
