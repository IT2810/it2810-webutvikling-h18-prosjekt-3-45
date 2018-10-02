import React, { Component } from 'react';
import { connect } from 'react-redux';
import { finishTodo, deleteTodo } from '../features/todos/actions';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Swipeout from 'react-native-swipeout';

class TodoList extends Component {
  handleOpen = (direction, id) => {
    if (direction === 'left') {
      this.props.finishTodo(id);
    }
  };

  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  render() {
    const openTodos = this.props.todos.filter(todo => !todo.done);

    return (
      <View style={styles.container}>
        {openTodos.map(todo => {
          const buttons = {
            left: [{
              text: 'Done',
              backgroundColor: '#68CC3D',
            }],

            right: [{
              text: 'Delete',
              onPress: () => this.handleDelete(todo.id),
              backgroundColor: '#bf3b4f',
            }],
          };

          return (
            <Swipeout
              left={buttons.left}
              right={buttons.right}
              onOpen={(section, row, direction) => this.handleOpen(direction, todo.id)}
              key={todo.id}
            >
              <View style={styles.todo}>
                <Text>{todo.text}</Text>
              </View>
            </Swipeout>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  finishTodo,
  deleteTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);