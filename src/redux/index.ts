import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)));

export default store;