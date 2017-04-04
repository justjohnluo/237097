import { combineReducers } from 'redux';
import mainReducer from './mainReducer.js';

const allReducers = combineReducers({
  mainReducer
});

export default allReducers;
