import React from 'react';
import { Pedometer } from 'expo';
import addDays from 'date-fns/add_days';
import Todo from './Todo';
import config from '../../config.js';

export default class PedometerTodo extends React.Component {
  state = {
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount = () => {
    if (config.pedometer) this._subscribe();
  };

  componentWillUnmount = () => this._unsubscribe();

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.updatePastSteps();
    }
  };

  updatePastSteps = () => {
    let startCount = new Date(this.props.todo.creationDate);
    let stopCount = addDays(new Date(), 1);
    if (this.props.todo.date) {
      startCount = new Date(
        new Date(this.props.todo.date).setHours(0, 0, 0, 0),
      );
      stopCount = new Date(
        new Date(this.props.todo.date).setHours(23, 59, 59, 0),
      );
    }

    Pedometer.isAvailableAsync().then(
      result => {
        Pedometer.getStepCountAsync(startCount, stopCount).then(
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

  _subscribe = () => {
    let countLive =
      !this.props.todo.date ||
      new Date(this.props.todo.date).setHours(0, 0, 0, 0) ==
        new Date().setHours(0, 0, 0, 0);

    Pedometer.isAvailableAsync().then(
      result => {
        if (countLive) {
          this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
              currentStepCount: result.steps,
            });
          });
        }
        this.updatePastSteps();
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
