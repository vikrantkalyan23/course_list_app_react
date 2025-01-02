import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const rootReducer = combineReducers({
  coursesData: courseReducer,
});

export default rootReducer;
