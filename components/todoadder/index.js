import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { addTodo } from '../../features/todos/actions';
import { Icon } from 'expo';
import { SchemaModal } from './schemamodal';

/**
 * Modal functionality is inspired from
 * https://facebook.github.io/react-native/docs/modal.html
 */
export class TodoAdder extends Component {
  state = {
    modalVisible: false,
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
   * Creates a new todo with forminput.
   * This will display the todoschema s.t. we can get a form modal
   * @param title         string    title for todo
   * @param description   string    description for todo (optional)
   * @param date          string    date for todo (optional)
   */
  createTodo = ({ text, description, date }) => {
    this.props.addTodo(text, description, date);
    this.setModalVisibility(false);
  };

  render() {
    return (
      <View style={styles.container}>
        <SchemaModal
          saveForm={this.createTodo}
          setModalVisibility={this.setModalVisibility}
          modalVisible={this.state.modalVisible}
        />
        <View style={styles.btnContainer}>
          <Icon.MaterialIcons
            name={'add-circle'}
            size={70}
            color={'#2f95dc'}
            onPress={() => {
              this.setModalVisibility(true);
            }}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(TodoAdder);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  btnContainer: {
    marginRight: 20,
    marginBottom: 20,
  },
});
