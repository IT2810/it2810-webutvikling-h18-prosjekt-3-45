import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TabNavigator from './navigation/TabNavigator';

export default class App extends React.Component {
  state = {
    ready: false,
  };

  async componentWillMount() {
    await this.loadFonts();

    this.setState({
      ready: true,
    });
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <TabNavigator />
          </View>
        </Provider>
      );
    }

    return <AppLoading />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
