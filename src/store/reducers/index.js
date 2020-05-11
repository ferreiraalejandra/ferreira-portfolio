import navReducer from "./navReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  navigation: navReducer
});

export default rootReducers