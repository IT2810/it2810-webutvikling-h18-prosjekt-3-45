import { combineReducers } from 'redux';
import todos from './features/todos/reducers';

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;