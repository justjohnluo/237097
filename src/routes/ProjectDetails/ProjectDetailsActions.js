import API from '../../utils/Api';

export default {
  getProjectDetails: () => {
    return (dispatch) => {
      API.getProjectDetails((err, result) => {
        dispatch({
          type: !err ? 'GET_PROJECT_DETAILS_SUCCESS' : 'GET_PROJECT_DETAILS_ERROR',
          payload: result
        });
      });
    }
  }
}
