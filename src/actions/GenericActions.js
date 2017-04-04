import API from '../utils/Api';

export default {
  checkAuthentication: () => {
    return (dispatch) => {
      API.checkAuthentication((user) => {
        dispatch({
          type: user ? 'LOGIN_SUCCESS' : 'AUTH_FAILED',
          payload: user
        });
      });
    };
  },
  login: (credentials) => {
    return (dispatch) => {
      API.login(credentials, (err, user) => {
        dispatch({
          type: !err && user ? 'LOGIN_SUCCESS' : 'LOGIN_ERROR',
          payload: user
        });
      });
    };
  },
  logout: () => {
    return (dispatch) => {
      API.logout(() => {
        dispatch({
          type: 'LOGOUT'
        });
      });
    };
  },
  getEvents: () => {
    return (dispatch) => {
      API.getEvents((err, result) => {
        dispatch({
          type: !err ? 'GET_EVENTS_SUCCESS' : 'GET_EVENTS_ERROR',
          payload: result
        });
      });
    }
  },
  getSponsors: () => {
    return (dispatch) => {
      API.getSponsors((err, result) => {
        dispatch({
          type: !err ? 'GET_SPONSORS_SUCCESS' : 'GET_SPONSORS_ERROR',
          payload: result
        });
      });
    }
  },
  getCategories: () => {
    return (dispatch) => {
      API.getCategories((err, result) => {
        dispatch({
          type: !err ? 'GET_CATEGORIES_SUCCESS' : 'GET_CATEGORIES_ERROR',
          payload: result
        });
      });
    }
  }
};
