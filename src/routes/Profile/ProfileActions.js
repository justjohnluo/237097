import API from '../../utils/Api';

export default {
  getUserProjects: (limit) => {
    return (dispatch) => {
      API.getProjects(null, limit, null, (result) => {
        dispatch({
          type: 'GET_USER_PROJECTS_SUCCESS',
          payload: result
        });
      });
    }
  },
  getSuggestedProjects: (limit) => {
    return (dispatch) => {
      API.getProjects(null, limit, null, (result) => {
        dispatch({
          type: 'GET_SUGGESTED_PROJECTS_SUCCESS',
          payload: result
        });
      });
    }
  }
}
