import API from '../../utils/Api';

export default {
  getRecentProjects: (limit) => {
    return (dispatch) => {
      API.getProjects(null, limit, null, (result) => {
        dispatch({
          type: 'GET_RECENT_PROJECTS_SUCCESS',
          payload: result
        });
      });
    }
  }
}
