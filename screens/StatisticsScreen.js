import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PedometerTodo } from '../components/PedometerTodo';

export default class StatisticsScreen extends React.Component {
  static navigationOptions = {
    title: 'Statistics',
  };

  render() {
    return (
      <View style={styles.container}>
        <PedometerTodo
          stepsGoal={600}
          creationDate={new Date(new Date().setHours(0, 0, 0, 0))}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
