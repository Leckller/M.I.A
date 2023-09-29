import { combineReducers } from "redux";
import ItunesReducer from "./ItunesReducer";

const rootReducer = combineReducers({ 
  ruyTunes: ItunesReducer,
 });

export default rootReducer;