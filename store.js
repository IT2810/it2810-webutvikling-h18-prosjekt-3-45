import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import rootReducer from './rootReducer';

// The key used for storing data in AsyncStorage.
const DATA_NAMESPACE = '@TodoApp:data';

/**
 * Attempt storing the provided state object using AsyncStorage.
 * The state parameter is currently the entire Redux state object.
 */
const saveState = async state => {
  try {
    await AsyncStorage.setItem(DATA_NAMESPACE, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

/**
 * Middleware which stores the state using AsyncStorage when an action
 * is dispatched. An exception is made for the REHYDRATE action.
 */
const saveStateMiddleware = store => next => action => {
  if (action.type !== 'REHYDRATE') {
    saveState(store.getState());
  }

  return next(action);
};

// Create the Redux store and register the middleware for saving state.
const store = createStore(rootReducer, applyMiddleware(saveStateMiddleware));

/**
 * Asynchronous function which attempts fetching data from the store.
 * When data is fetched, a REHYDRATE action is dispatched. The intention
 * is that reducers will listen for this action and then fetch
 * the data which they require.
 */
const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem(DATA_NAMESPACE);

    if (value !== null) {
      store.dispatch({
        type: 'REHYDRATE',
        state: JSON.parse(value),
      });
    }
   } catch (error) {
     console.error(error);
   }
};

// Attempt loading data asynchronously.
retrieveData();

export default store;