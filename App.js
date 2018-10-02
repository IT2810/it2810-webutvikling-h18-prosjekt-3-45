import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoAdder from "./components/TodoAdder";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoAdder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

  },
});