import API from '../../utils/Api';

export default {
  getCampaigns: (limit) => {
    return (dispatch) => {
      API.getCampaigns(limit, (result) => {
        dispatch({
          type: 'GET_CAMPAIGNS_SUCCESS',
          payload: result
        });
      });
    }
  },
  getStudents: (limit) => {
    return (dispatch) => {
      API.getStudents(limit, (result) => {
        dispatch({
          type: 'GET_STUDENTS_SUCCESS',
          payload: result
        });
      });
    }
  }
}
