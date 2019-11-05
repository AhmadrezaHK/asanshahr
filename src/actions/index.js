import asanshar from '../api/asanshar';

export const fetch = () => async dispatch => {
  let response;
  dispatch({ type: 'LOADING' });
  try {
    response = await asanshar.get('');
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
  dispatch({
    type: 'SUCCESS',
    payload: response.data
  });
};
