import API from '../../utils/Api';

export default {
  getCategoryProjects: (category, limit, defaultType) => {
    return (dispatch) => {
      API.getProjects(category, limit, defaultType, (result) => {
        dispatch({
          type: 'GET_CATEGORY_PROJECTS_SUCCESS',
          payload: result
        });
      });
    }
  }
}
