const reducer = (
  state = { ads: [], loading: false, error: '', selectedAd: {} , page:1},
  action
) => {
  switch (action.type) {
    case 'SUCCESS':
      return { ...state, ads: action.payload, loading: false };
    case 'LOADING':
      return { ...state, loading: true, error: '' };
    case 'ERROR':
      return { ...state, loading: false, error: action.error };
    case 'SELECTED_AD':
      return { ...state, selectedAd: action.payload };
    case 'PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
export default reducer;
