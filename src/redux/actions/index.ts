import { iTunes } from "../../services/Apis";
import { AlbumType, Dispatch /*GetState*/ } from "../../services/types";

export const REQUEST_STARTED = 'REQUEST_STARTED';

export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';

export const REQUEST_FAILED = 'REQUEST_FAILED';


function requestStarted() {
  return { type: REQUEST_STARTED };
}
function requestSuccessful(Album: AlbumType[]) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: Album,
  };
}
function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export const FetchItunes = () => {
  return async (disp: Dispatch, /* _getState: GetState */) => {
    disp(requestStarted())
    try {
      const data = await iTunes();
      disp(requestSuccessful(data))
    } catch (error){
      disp(requestFailed('error'))
    }
  }
}