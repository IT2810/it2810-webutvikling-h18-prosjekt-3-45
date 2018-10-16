import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import isBefore from 'date-fns/is_before';
import isSameDay from 'date-fns/is_same_day';
import addDays from 'date-fns/add_days';
import startOfDay from 'date-fns/start_of_day';
import TodoList from './TodoList';
import { todoStyles } from './Todo';

// This class is exported both as the default export and as a component
// wrapped using connect to ease testing of this component.
export class Tasks extends Component {
  render() {
    const openTodos = this.props.todos.filter(
      todo => todo.done === this.props.showDone,
    );

    // Find all done todos and sort by date checked
    const doneTodos = Object.values(
      this.props.todos.filter(todo => todo.done),
    ).sort(
      (a, b) =>
        a.finished > b.finished ? -1 : a.finished < b.finished ? 1 : 0,
    );

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
      <Container>
        <Content>
          {!this.props.showDone ? (
            sections.map((section, i) => (
              <Fragment key={section}>
                {!this.props.showDone && (
                  <View style={[todoStyles.todo, tasksStyles.section]}>
                    <Text style={tasksStyles.sectionTitle}>{section}</Text>
                  </View>
                )}

                <TodoList showDone={this.props.showDone} todos={days[i]} />
              </Fragment>
            ))
          ) : (
            <Fragment>
              <TodoList showDone={this.props.showDone} todos={doneTodos} />
            </Fragment>
          )}
        </Content>
      </Container>
    );
  }
}

export const tasksStyles = StyleSheet.create({
  sectionTitle: {
    fontWeight: 'bold',
  },

  section: {
    backgroundColor: '#F7F7F7',
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Tasks);
