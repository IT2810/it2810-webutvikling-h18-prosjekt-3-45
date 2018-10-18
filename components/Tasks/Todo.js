import React from 'react';
import Swipeout from 'react-native-swipeout';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Progress from 'react-native-progress';

export default class Todo extends React.Component {
  state = {
    isClosed: true,
  };

  render() {
    const buttons = {
      left: [
        {
          text: 'Done',
          backgroundColor: '#68CC3D',
        },
      ],
      leftUndone: [
        {
          text: 'Undone',
          backgroundColor: '#68CC3D',
        },
      ],
      right: [
        {
          text: 'Edit',
          onPress: () => this.props.onPress(this.props.todo.id),
          backgroundColor: '#00AAEE',
        },
        {
          text: 'Delete',
          onPress: () => this.props.onDelete(this.props.todo.id),
          backgroundColor: '#bf3b4f',
        },
      ],
    };

    const todo = (
      <View style={todoStyles.todo}>
        <View style={this.props.todo.isPedometer && { width: '50%' }}>
          <Text>{this.props.todo.text}</Text>
        </View>

        {this.props.todo.isPedometer && (
          <View style={todoStyles.container}>
            <Text style={todoStyles.steps}>
              {this.props.getTotalSteps() > this.props.stepsGoal
                ? this.props.stepsGoal
                : this.props.getTotalSteps()}{' '}
              / {this.props.stepsGoal}
            </Text>
            <Progress.Bar
              progress={this.props.getTotalSteps() / this.props.stepsGoal}
              width={100}
              color={
                this.props.getTotalSteps() > this.props.stepsGoal
                  ? '#68CC3D'
                  : '#2f95dc'
              }
            />
          </View>
        )}
      </View>
    );

    return (
      <Swipeout
        left={this.props.todo.done ? buttons.leftUndone : buttons.left}
        right={buttons.right}
        close={this.state.isClosed}
        onOpen={(section, row, direction) => {
          this.props.onOpen(direction, this.props.todo.id, () =>
            this.setState({ isClosed: true }),
          );
        }}
        key={this.props.todo.id}
      >
        {todo}
      </Swipeout>
    );
  }
}

export const todoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  todo: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderBottomColor: '#CCC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  steps: {
    marginRight: 5,
  },
});
