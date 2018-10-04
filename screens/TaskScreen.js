import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from '../components/TodoList';
import TodoAdder from '../components/todoadder';

export default class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
      <View style={styles.container}>
        <TodoList />
        <TodoAdder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    border: 1,
    borderWidth: 1,
    borderColor: '#ff0',
    justifyContent: 'flex-end',
  },
});