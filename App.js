import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import TodoList from './components/TodoList';

const DATA_NAMESPACE = '@TodoApp:data';

const saveState = async state => {
  try {
    await AsyncStorage.setItem(DATA_NAMESPACE, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

const saveStateMiddleware = store => next => action => {
  if (action.type !== 'REHYDRATE') {
    saveState(store.getState());
  }

  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(saveStateMiddleware));

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

retrieveData();

store.subscribe(async () => {
  const state = store.getState();
  await saveState(state);
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Open up App.js to start working on your app!</Text>

          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
