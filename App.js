import React from 'react';
import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import store from './store';
import Navigator from './components/Navigator';

export default class App extends React.Component {
  state = {
    // Whether or not the assets have finished loading.
    ready: false,
  };

  async componentWillMount() {
    // Wait until fonts have finished loading.
    await this.loadFonts();

    this.setState({
      ready: true,
    });
  }

  /**
   * Load required fonts asynchronously.
   */
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
  }

  render() {
    // Only render the app when the application has finished loading.
    // If the app has not finished loading, show a splash icon.
    if (this.state.ready) {
      return (
        <Provider store={store}>
          <Root>
            <View style={styles.container}>
              <Navigator />
            </View>
          </Root>
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
