import React, { Component } from 'react';
import Calendar from '../Calendar';

export default class CalendarScreen extends Component {
  static navigationOptions = {
    title: 'Calendar',
  };

  render() {
    return <Calendar />;
  }
}
