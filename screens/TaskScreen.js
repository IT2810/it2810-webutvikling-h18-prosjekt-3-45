import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from '../components/TodoList';

export default class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
      <View style={styles.container}>
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4256f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});