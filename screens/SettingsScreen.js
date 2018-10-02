import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
  
    render() {
    return (
      <View style={styles.container}>
        <Text>Settings stuff</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42f450',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
