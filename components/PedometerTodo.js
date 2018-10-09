import React from 'react';
import { Pedometer } from 'expo';
import addDays from 'date-fns/add_days';
import Todo from './Todo';
import config from '../config.js';

export default class PedometerTodo extends React.Component {
  state = {
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    if (config.pedometer) this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    Pedometer.isAvailableAsync().then(
      result => {
        this._subscription = Pedometer.watchStepCount(result => {
          this.setState({
            currentStepCount: result.steps,
          });
        });

        Pedometer.getStepCountAsync(
          new Date(this.props.todo.creationDate),
          addDays(new Date(), 1),
        ).then(
          result => {
            this.setState({ pastStepCount: result.steps });
          },
          error => {
            alert(error);
          },
        );
      },
      error => {
        alert(error);
      },
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  getTotalSteps = () => this.state.pastStepCount + this.state.currentStepCount;

  render() {
    return (
      <Todo
        {...this.props}
        getTotalSteps={this.getTotalSteps}
        stepsGoal={this.props.todo.stepsGoal}
      />
    );
  }
}
