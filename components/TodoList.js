import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Alert } from 'react-native';
import Todo from './Todo';
import PedometerTodo from './PedometerTodo';
import { Container, Content, Text, Toast } from 'native-base';
import isBefore from 'date-fns/is_before';
import isAfter from 'date-fns/is_after';
import isSameDay from 'date-fns/is_same_day';
import addDays from 'date-fns/add_days';
import startOfDay from 'date-fns/start_of_day';
import SchemaModal from './TodoAdder/SchemaModal';
import store from '../store';
import { finishTodo, deleteTodo, updateTodo } from '../features/todos/actions';

// This class is exported both as the default export and as a component
// wrapped using connect to ease testing of this component.
export class TodoList extends Component {
  /**
   * modalVisible isXX.XX.20XX, XX:XX whether the modal for adding a new todo should be visible
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
      // Strip out the done flag, as we want this to be reset by the reducer.
      const { done, ...rest } = todo;

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
  handleOpen = (direction, id) => {
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
            { text: 'Cancel', style: 'cancel' },
          ],
          { cancelable: true },
        );
        return;
      }

      handleFinishTodo(todo, index);
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
    const openTodos = this.props.todos.filter(todo => !todo.done);

    const sections = ['Someday', 'Overdue', 'Today', 'Tomorrow', 'Upcoming'];

    const days = [
      // Todos without any specific set date.
      openTodos.filter(todo => !todo.date),

      // Todos which are overdue.
      openTodos.filter(
        todo => todo.date && isBefore(todo.date, startOfDay(new Date())),
      ),
    ];

    for (let i = 0; i < 2; i += 1) {
      days.push(
        openTodos.filter(
          todo => todo.date && isSameDay(addDays(new Date(), i), todo.date),
        ),
      );
    }

    // Upcoming todos which do not fit into the above sections.
    days.push(
      openTodos.filter(
        todo => todo.date && isAfter(todo.date, addDays(new Date(), 1)),
      ),
    );

    return (
      <Container>
        <View>
          <SchemaModal
            saveForm={this.updateTodo}
            setModalVisibility={this.setModalVisibility}
            modalVisible={this.state.modalVisible}
            currentTodo={this.state.pressedTodo}
          />
        </View>

        <Content>
          {sections.map((section, i) => (
            <Fragment key={section}>
              <View style={styles.todo}>
                <Text style={styles.sectionTitle}>{section}</Text>
              </View>

              {days[i].map(
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
          ))}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

  sectionTitle: {
    fontWeight: 'bold',
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
