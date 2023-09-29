import { AnyAction } from "redux";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const STATE_INITIAL = {
  isFetching: false,
  Album: {},
}

const ItunesReducer = (state = STATE_INITIAL, action: AnyAction) => {
  switch (action.type){
    case REQUEST_STARTED: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case REQUEST_SUCCESSFUL: {
      return {
        ...state,
        isFetching: false,
        Album: action.payload,
      }
    }
    case REQUEST_FAILED: {
      return{
        ...state,
        isFetching: false,
      }
    }
    default: {
      return state;
    }
  }
}
export default ItunesReducer;