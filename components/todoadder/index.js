import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Modal, TouchableHighlight, StyleSheet } from 'react-native';
import TodoSchema from '../todoschema';
import { addTodo } from '../../features/todos/actions';
import { Icon } from "expo";

// TODO LEgg til testing
// TODO fikse slik at det ikke vises noe annet enn time og minutt i todoschema

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
  setModalVisibility = (visible) => {
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
  createTodo = ({ title, description, date }) => {
    this.props.addTodo(title, description, date);
    this.setModalVisibility(false);
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisibility(false)}
        >
          <View style={styles.container}>
            <TodoSchema
              saveForm={this.createTodo}
              hideModule={this.setModalVisibility}
            />
          </View>
        </Modal>

        <View style={styles.btnContainer}>
              <Icon.MaterialIcons
                name={'add-circle'}
                size={70}
                color={'#00AAEE'}
                onPress={() => {
                  this.setModalVisibility(true);
                }}
                underlayColor={'#ffff00'}
              />
        </View>
      </View>
    )
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
    flex: 1,
    paddingVertical: 30,
  },


  btnContainer: {
    marginBottom: 20,
  },

  iconContainer: {
    borderColor: '#777',
    borderWidth: 1,
    backgroundColor: '#00AAEE',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',

  }
});