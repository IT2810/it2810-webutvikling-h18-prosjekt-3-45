import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import TodoSchema from '../todoschema';

/**
 * Modal functionality is inspired from
 * https://facebook.github.io/react-native/docs/modal.html
 * but has been modified to match our interests
 */
export class SchemaModal extends Component {
  saveForm = frmObject => {
    this.props.saveForm(frmObject);
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => this.props.setModalVisibility(false)}
      >
        <View style={styles.schemaContainer}>
          <TodoSchema
            saveForm={this.props.saveForm}
            hideModule={this.props.setModalVisibility}
          />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  schemaContainer: {
    flex: 1,
    paddingVertical: 30,
  },
});
