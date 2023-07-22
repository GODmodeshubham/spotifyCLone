import bgReducer from "./bgReducer";
import { combineReducers } from "redux";
import typeReducer from "./typeReducer";

const myReducers = combineReducers({
  background: bgReducer,
  genre: typeReducer,
});
export default myReducers;
