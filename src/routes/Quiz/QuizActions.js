import API from '../../utils/Api';

export default {
  getQuiz: () => {
    return (dispatch) => {
      API.getQuiz((err, result) => {
        dispatch({
          type: !err ? 'GET_QUIZ_SUCCESS' : 'GET_QUIZ_ERROR',
          payload: result
        });
      });
    }
  }
}
