import { combineReducers } from "redux";
import holdingsReducer from "./holdingsTable";
import networthReducer from "./networthChart";

 const rootReducer = combineReducers({
  networth: networthReducer,
  holdings: holdingsReducer,
});

export default rootReducer;
