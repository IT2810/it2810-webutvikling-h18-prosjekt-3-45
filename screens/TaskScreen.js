import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tasks from '../components/Tasks';
import TodoAdder from '../components/TodoAdder';

export default class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
      <View style={styles.container}>
        <Tasks />
        <TodoAdder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
