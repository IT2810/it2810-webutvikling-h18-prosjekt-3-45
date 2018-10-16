import { combineReducers } from 'redux';
import todos from './features/todos/reducers';
import settings from './features/settings/reducers';

const rootReducer = combineReducers({
  todos,
  settings,
});

export default rootReducer;
