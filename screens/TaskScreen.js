import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TaskScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Task stuff</Text>
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