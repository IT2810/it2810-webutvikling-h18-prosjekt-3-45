import React from 'react';
import { Pedometer } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

const createdDate = new Date();
createdDate.setDate(createdDate.getDate() - 1);

const goalSteps = 500;

export class PedometerTodo extends React.Component {
  state = {
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
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

        Pedometer.getStepCountAsync(createdDate, new Date()).then(
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

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Walked {this.state.pastStepCount + this.state.currentStepCount} of{' '}
          {goalSteps} steps
        </Text>
        <Progress.Bar
          progress={
            (this.state.pastStepCount + this.state.currentStepCount) / goalSteps
          }
          width={200}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
