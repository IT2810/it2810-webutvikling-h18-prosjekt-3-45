import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';
import { addTodo, addPedometerTodo } from '../../features/todos/actions';
import SchemaModal from './SchemaModal';

export class TodoAdder extends Component {
  state = {
    modalVisible: false,
  };

  /**
   * Sets the visibility of the form modal to the given state.
   * @param visible boolean Whether or not the modal should be visible.
   */
  setModalVisibility = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  /**
   * Creates a new TODO using the provided information.
   * Hides the modal after adding the TODO.
   * @param title string The title of the TODO that is to be added.
   * @param description string An optional description of the TODO.
   * @param date string The date on which the TODO should be done.
   */
  createTodo = ({ text, description, date, isPedometer, stepsGoal }) => {
    if (isPedometer)
      this.props.addPedometerTodo(text, description, date, stepsGoal);
    else this.props.addTodo(text, description, date);
    this.setModalVisibility(false);
  };

  render() {
    return (
      <View style={styles.container}>
        <SchemaModal
          saveForm={this.createTodo}
          setModalVisibility={this.setModalVisibility}
          modalVisible={this.state.modalVisible}
          initialDate={this.props.initialDate}
        />

        <View style={styles.fabContainer}>
          <Fab
            style={styles.fab}
            position="bottomRight"
            onPress={() => this.setModalVisibility(true)}
          >
            <Icon name="md-add" />
          </Fab>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  fabContainer: {
    flex: 1,
  },

  fab: {
    backgroundColor: '#5067FF',
  },
});

const mapDispatchToProps = {
  addTodo,
  addPedometerTodo,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(TodoAdder);
