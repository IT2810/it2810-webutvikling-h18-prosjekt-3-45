import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import Todo from './Todo';
import PedometerTodo from './PedometerTodo';
import { Toast } from 'native-base';
import store from '../store';
import SchemaModal from './TodoAdder/SchemaModal';
import { finishTodo, deleteTodo, updateTodo } from '../features/todos/actions';

// This class is exported both as the default export and as a component
// wrapped using connect to ease testing of this component.
export class TodoList extends Component {
  /**
   * modalVisible is whether the modal for adding a new todo should be visible
   * pressedTodo is the todoobject (containing the states) that is pressed
   * @type {{modalVisible: boolean, pressedTodo: {}}}
   */
  state = {
    modalVisible: false,
    pressedTodo: {},
  };

  /**
   * Handles a press on the UNDO button in the toast which is displayed
   * after swiping away a TODO.
   */
  handleUndo = (reason, todo, index) => {
    if (reason === 'user') {
      // Strip out the done flag and finished time, as we want
      // this to be reset by the reducer.
      const { done, finished, ...rest } = todo;

      store.dispatch({
        // This action type is a special action which allows us to
        // insert a TODO at a specified index.
        type: 'READD_TODO',
        ...rest,
        index,
      });
    }
  };

  /**
   * Handles sliding of todos
   * @param direction   the direction of the sliding
   * @param id          id of the todo
   */
  handleOpen = (direction, id, close) => {
    if (direction === 'left') {
      // Find the TODO and save it so that it can be restored later.
      const index = this.props.todos.findIndex(todo => todo.id === id);

      const todo = this.props.todos[index];

      handleFinishTodo = (todo, index) => {
        Toast.show({
          text: 'Todo marked as finished',
          buttonText: 'Undo',
          onClose: reason => this.handleUndo(reason, todo, index),
          duration: 5000,
        });

        this.props.finishTodo(id);
      };

      if (!todo.done && todo.isPedometer) {
        Alert.alert(
          'Are you sure?',
          "You don't have the required amount of steps!",
          [
            { text: 'OK', onPress: () => handleFinishTodo(todo, index) },
            { text: 'Cancel', onPress: () => close(), style: 'cancel' },
          ],
          { cancelable: true },
        );
        return;
      }

      handleFinishTodo(todo, index);

      close();
    }
  };

  /**
   * When a todo is pressed in the list, find the states and send these to updateTodo
   * @param id
   */
  handlePress = id => {
    // Finds the id of pressed todo among todos
    this.state.pressedTodo = this.props.todos.find(todo => todo.id === id);
    // Shows the form
    this.setModalVisibility(true);
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
   * @param data        object containing text, description and date for the changed todo
   */
  updateTodo = data => {
    this.setModalVisibility(false);
    this.props.updateTodo(this.state.pressedTodo.id, data);
  };

  render() {
    return (
      <Fragment>
        <View>
          <SchemaModal
            saveForm={this.updateTodo}
            setModalVisibility={this.setModalVisibility}
            modalVisible={this.state.modalVisible}
            currentTodo={this.state.pressedTodo}
          />
        </View>
        {this.props.todos.map(
          todo =>
            todo.isPedometer ? (
              <PedometerTodo
                key={todo.id}
                onOpen={this.handleOpen}
                onDelete={this.handleDelete}
                onPress={this.handlePress}
                todo={todo}
              />
            ) : (
              <Todo
                key={todo.id}
                onOpen={this.handleOpen}
                onDelete={this.handleDelete}
                onPress={this.handlePress}
                todo={todo}
              />
            ),
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  finishTodo,
  deleteTodo,
  updateTodo,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(TodoList);
