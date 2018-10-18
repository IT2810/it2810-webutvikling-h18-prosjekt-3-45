import { combineReducers } from 'redux';
import todos from './todos/reducers';
import settings from './settings/reducers';

const rootReducer = combineReducers({
  todos,
  settings,
});

export default rootReducer;
