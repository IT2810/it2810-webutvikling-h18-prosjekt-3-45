import React, { Component } from 'react';
import { connect } from 'react-redux';
import { finishTodo, deleteTodo, updateTodo } from '../features/todos/actions';

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Swipeout from 'react-native-swipeout';
import { SchemaModal } from './todoadder/schemamodal';

// This class is exported both as the default export and as a component
// wrapped using connect to ease testing of this component.
export class TodoList extends Component {
  state = {
    modalVisible: false,
  };

  handleOpen = (direction, id) => {
    if (direction === 'left') {
      this.props.finishTodo(id);
    }

    // When a todo is pressed in the list, find the states and send these to updateTodo
    if (direction === undefined) {
      let todo = this.props.todos.find(todo => todo.id === id);
      this.setModalVisibility(true);

      // Call this function after pressing save
      //this.updateTodo(todo.id, todo);
    }
  };

  /**
   * Deletes the todo from the list
   * @param id      id for redux
   */
  handleDelete = id => {
    this.props.deleteTodo(id);
  };

  /**
   * Sets the visibility of the form modal to the visible-state
   * @param visible   boolean (whether or not the modal should be visible)
   */
  setModalVisibility = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  /**
   * Updates a new todo with forminput from editing todo
   * This will display the todoschema s.t. we can get a form modal
   * @param id          id for todo in redux
   * @param data        object containing text, description and date
   */
  updateTodo = (id, data) => {
    this.props.updateTodo(id, data);
    this.setModalVisibility(false);
  };

  render() {
    const openTodos = this.props.todos.filter(todo => !todo.done);

    return (
      <ScrollView style={styles.container}>
        <View>
          <SchemaModal
            saveForm={this.updateTodo}
            setModalVisibility={this.setModalVisibility}
            modalVisible={this.state.modalVisible}
          />
        </View>
        <View>
          {openTodos.map(todo => {
            const buttons = {
              center: [
                {
                  onPress: () => this.handlePress,
                },
              ],
              left: [
                {
                  text: 'Done',
                  backgroundColor: '#68CC3D',
                },
              ],

              right: [
                {
                  text: 'Delete',
                  onPress: () => this.handleDelete(todo.id),
                  backgroundColor: '#bf3b4f',
                },
              ],
            };

            return (
              <Swipeout
                left={buttons.left}
                right={buttons.right}
                onOpen={(section, row, direction) =>
                  this.handleOpen(direction, todo.id)
                }
                key={todo.id}
              >
                <View style={styles.todo}>
                  <Text>{todo.text}</Text>
                </View>
              </Swipeout>
            );
          })}
        </View>
      </ScrollView>
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
  updateTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
