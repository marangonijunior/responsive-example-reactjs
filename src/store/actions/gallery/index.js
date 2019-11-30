import axios from 'axios';
import { GET_SUCCESS, GET_ERROR } from '../types/gallery';

const getSuccess = data => ({
  type: GET_SUCCESS,
  payload: {
    data,
  },
});

const getError = error => ({
  type: GET_ERROR,
  payload: {
    error,
  },
});

export default () => dispatch => axios.get(
  `http://demo7281787.mockable.io/gallery`,
)
  .then(({ data }) => dispatch(getSuccess(data)))
  .catch(error => dispatch(getError(error)));