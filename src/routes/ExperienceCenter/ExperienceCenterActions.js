import API from '../../utils/Api';

export default {
  getProjects: (limit) => {
    return (dispatch) => {
      API.getProjects(null, limit, null, (result) => {
        dispatch({
          type: 'GET_EXPERIENCE_CENTER_PROJECTS_SUCCESS',
          payload: result
        });
      });
    }
  }
}
