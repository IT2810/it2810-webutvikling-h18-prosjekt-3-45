import { createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import rootReducer from './features/rootReducer';

// The key used for storing data in AsyncStorage.
const DATA_NAMESPACE = '@TodoApp:data';

const store = createStore(rootReducer);

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

// Listen for actions and save the state when one is dispatched.
store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});

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
