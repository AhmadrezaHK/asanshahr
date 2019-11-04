import asanshar from '../api/asanshar';

export const fetch = () => async dispatch => {
  const response = await asanshar.get('');
  dispatch({
    type: 'FETCH',
    payload: response.data
  });
};
