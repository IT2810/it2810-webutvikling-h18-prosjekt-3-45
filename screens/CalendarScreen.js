import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Calendar stuff</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff00f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
