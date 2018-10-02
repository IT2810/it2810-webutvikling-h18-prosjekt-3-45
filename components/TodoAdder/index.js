import React, { Component } from 'react';
import {View, Text, Modal, TouchableHighlight} from 'react-native'
import TodoSchema from "../TodoSchema";

// TODO Legg til ikon
// TODO CSS
/**
 * Modal functionality is inspired from
 * https://facebook.github.io/react-native/docs/modal.html
 */
export default class TodoAdder extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisibility = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };


  // This will display the TodoSchema s.t. we can get a form modal
  createTodo = ({ title, description, date }) => {


    this.setModalVisibility(false);
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>
            <TodoSchema
              saveForm={this.createTodo}
              hideModule={this.setModalVisibility}
            />
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisibility(true);
          }}>
          <Text>STOR PLUSS IKON</Text>
        </TouchableHighlight>
      </View>
    )
  }
}