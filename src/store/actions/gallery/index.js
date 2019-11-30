import axios from 'axios';
import { GET_SUCCESS, GET_ERROR } from '../types/search';

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
  `http://www.mocky.io/v2/5ddc34683400008f9deae20b`,
)
  .then(({ data }) => dispatch(getSuccess(data)))
  .catch(error => dispatch(getError(error)));