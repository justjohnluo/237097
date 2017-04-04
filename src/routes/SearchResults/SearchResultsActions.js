import API from '../../utils/Api';

export default {
  getSearchResults: (category, limit, defaultType) => {
    return (dispatch) => {
      API.getProjects(category, limit, defaultType, (result) => {
        dispatch({
          type: 'GET_SEARCH_RESULTS_SUCCESS',
          payload: result
        });
      });
    }
  }
}
