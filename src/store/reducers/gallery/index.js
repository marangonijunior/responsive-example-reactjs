import {
    GET_SUCCESS,
    GET_ERROR,
  } from '../../actions/types/gallery';
  
  export default function gallery(state = {}, action) {
    switch (action.type) {
      case GET_SUCCESS:
        if (state && state.error) delete state.error;
        return Object.assign({}, state, action.payload);
      case GET_ERROR:
        return Object.assign({}, state, action.payload);
      default:
        return state;
    }
  }