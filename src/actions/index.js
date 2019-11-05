import asanshar from '../api/asanshar';

export const fetch = pagination => async dispatch => {
  let response;
  dispatch({ type: 'LOADING' });
  try {
    response = await asanshar.get('/offers', {
      params: {
        pageSize: 7,
        pageNumber: pagination.current
      }
    });
  } catch (error) {
    dispatch({ type: 'ERROR', error: error });
  }
  dispatch({
    type: 'SUCCESS',
    payload: response.data
  });
};

export const selectedAd = (ad) => {
  return{
    type:'SELECTED_AD',
    payload:ad
  }
};

export const page = (page) => {
  return{
    type:'PAGE',
    payload:page
  }
};
