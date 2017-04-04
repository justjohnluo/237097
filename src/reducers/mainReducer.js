const defaultState = {
  showMenu: false,
  showLogin: false,
  user: null
};

const FETCH_ERROR = 'Data not available';
const LOGIN_ERROR = 'Invalid username or password';

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {...state, showMenu: !state.showMenu};
    case 'TOGGLE_LOGIN_MODAL':
      return {...state, loginError: null, showLogin: !state.showLogin};
    case 'LOGIN_SUCCESS':
      return {...state, authFailed: false, loginError: null, user: action.payload, showLogin: false};
    case 'LOGIN_ERROR':
      return {...state, loginError: LOGIN_ERROR};
    case 'LOGOUT':
      return {...state, loginError: null, user: null, authFailed: true};
    case 'AUTH_FAILED':
      return {...state, user: null, authFailed: true};
    case 'GET_RECENT_PROJECTS_SUCCESS':
      return {...state, recentProjectsError: null, recentProjects: action.payload};
    case 'GET_EVENTS_ERROR':
      return {...state, eventsError: FETCH_ERROR};
    case 'GET_EVENTS_SUCCESS':
      return {...state, eventsError: null, events: action.payload};
    case 'GET_SPONSORS_ERROR':
      return {...state, sponsorsError: FETCH_ERROR};
    case 'GET_SPONSORS_SUCCESS':
      return {...state, sponsorsError: null, sponsors: action.payload};
    case 'GET_CATEGORIES_ERROR':
      return {...state, categoriesError: FETCH_ERROR};
    case 'GET_CATEGORIES_SUCCESS':
      return {...state, categoriesError: null, categories: action.payload};
    case 'GET_CATEGORY_PROJECTS_SUCCESS':
      return {...state, categoryProjects: action.payload};
    case 'GET_SEARCH_RESULTS_SUCCESS':
      return {...state, searchResults: action.payload};
    case 'GET_PROJECT_DETAILS_ERROR':
      return {...state, projectDetailsError: FETCH_ERROR};
    case 'GET_PROJECT_DETAILS_SUCCESS':
      return {...state, projectDetailsError: null, projectDetails: action.payload};
    case 'GET_QUIZ_ERROR':
      return {...state, quizError: FETCH_ERROR};
    case 'GET_QUIZ_SUCCESS':
      return {...state, quizError: null, quiz: action.payload};
    case 'GET_CAMPAIGNS_SUCCESS':
      return {...state, campaigns: action.payload};
    case 'GET_STUDENTS_SUCCESS':
      return {...state, students: action.payload};
    case 'GET_EXPERIENCE_CENTER_PROJECTS_SUCCESS':
      return {...state, experienceCenterProjects: action.payload};
    case 'GET_USER_PROJECTS_SUCCESS':
      return {...state, userProjects: action.payload};
    case 'GET_SUGGESTED_PROJECTS_SUCCESS':
      return {...state, suggestedProjects: action.payload};
    default:
      return state;
  }
};
