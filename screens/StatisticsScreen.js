import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StatisticsScreen extends React.Component {
    static navigationOptions = {
        title: 'Statistics',
    };
  
    render() {
    return (
      <View style={styles.container}>
        <Text>Statistics stuff</Text>
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
