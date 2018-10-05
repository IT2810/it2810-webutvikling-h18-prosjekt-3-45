import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { finishTodo, deleteTodo, updateTodo } from '../features/todos/actions';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Swipeout from 'react-native-swipeout';
import isBefore from 'date-fns/is_before';
import isSameDay from 'date-fns/is_same_day';
import addDays from 'date-fns/add_days';
import startOfDay from 'date-fns/start_of_day';
import { SchemaModal } from './todoadder/schemamodal';

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
   * Handles sliding of todos
   * @param direction   the direction of the sliding
   * @param id          id of the todo
   */
  handleOpen = (direction, id) => {
    if (direction === 'left') {
      this.props.finishTodo(id);
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

    const sections = ['Someday', 'Overdue', 'Today', 'Tomorrow'];

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

    return (
      <ScrollView style={styles.container}>
        <View>
          <SchemaModal
            saveForm={this.updateTodo}
            setModalVisibility={this.setModalVisibility}
            modalVisible={this.state.modalVisible}
            currentTodo={this.state.pressedTodo}
          />
        </View>

        <View>
          {sections.map((section, i) => (
            <Fragment key={section}>
              <View style={styles.todo}>
                <Text style={styles.sectionTitle}>{section}</Text>
              </View>

              {days[i].map(todo => {
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
                      onPress: () => this.handlePress(todo.id),
                      backgroundColor: '#00AAEE',
                    },
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
                    onOpen={(section, row, direction) => {
                      this.handleOpen(direction, todo.id);
                    }}
                    key={todo.id}
                  >
                    <View style={styles.todo}>
                      <Text>{todo.text}</Text>
                    </View>
                  </Swipeout>
                );
              })}
            </Fragment>
          ))}
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
