import React from 'react';
import Settings from '../components/Settings';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return <Settings />;
  }
}
