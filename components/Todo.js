import React from 'react';
import Swipeout from 'react-native-swipeout';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export default class Todo extends React.Component {
  render() {
    const buttons = {
      left: [
        {
          text: 'Done',
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
        <Text>{this.props.todo.text}</Text>

        {this.props.todo.isPedometer && (
          <View style={todoStyles.container}>
            <Text>
              Walked{' '}
              {this.props.getTotalSteps() > this.props.stepsGoal
                ? this.props.stepsGoal
                : this.props.getTotalSteps()}{' '}
              of {this.props.stepsGoal} steps
            </Text>
            <Progress.Bar
              progress={this.props.getTotalSteps() / this.props.stepsGoal}
              width={300}
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

    return this.props.todo.done ? (
      todo
    ) : (
      <Swipeout
        left={
          this.props.todo.isPedometer
            ? this.props.getTotalSteps() > this.props.stepsGoal
              ? buttons.left
              : null
            : buttons.left
        }
        right={buttons.right}
        onOpen={(section, row, direction) => {
          this.props.onOpen(direction, this.props.todo.id);
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
    flex: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  todo: {
    height: 50,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: '#FFF',
    borderBottomColor: '#CCC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
