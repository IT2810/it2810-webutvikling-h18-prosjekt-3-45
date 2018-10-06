import React, { Component } from 'react';
import { Text, StyleSheet, Alert, TextInput } from 'react-native';
import {
  Container,
  Card,
  Content,
  Button,
  Footer,
  Form,
  Textarea,
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Icon } from 'expo';
import format from 'date-fns/format';

class TodoSchema extends Component {
  constructor(props) {
    super(props);

    /**
     * All the state which is stored in this component.
     * @type {{isDateTimePickerVisible: boolean, text: string, description: string, date: string}}
     */
    this.state = {
      isDateTimePickerVisible: false, // Whether or not the data picker is visible.
      text: '', // The value for the TODO title text input.
      description: '', // The value for the TODO description input.
      date: '', // The value for the TODO date.
    };

    // This component can be used to both edit todos and to create new ones.
    // If a todo to be edited is provided, we need to update the initial state.
    const curTodo = this.props.currentTodo;

    // Update the state of schema with current todo values if existing.
    if (curTodo !== undefined) {
      this.state = {
        text: curTodo.text,
        description: curTodo.description,
        date: curTodo.date,
      };
    }
  }

  /**
   * Shows the DateTime picker.
   */
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  /**
   * Hides the DateTime picker.
   */
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  /**
   * Sets the title state based on input from the user.
   * @param title string The updated title.
   */
  handleTitlePicked = title => {
    this.setState({
      text: title,
    });
  };

  /**
   * Sets the description state based on input from the user.
   * @param description string The updated description for the todo.
   */
  handleDescriptionPicked = description => {
    this.setState({
      description: description,
    });
  };

  /**
   * Sets the date state based on input from the user.
   * @param date string The newly picked date.
   */
  handleDatePicked = date => {
    this.setState({
      // The date needs to be stored as a GMT string so that we
      // can correctly parse it at a later point in time.
      date: date.toGMTString(),
    });

    this.hideDateTimePicker();
  };

  /**
   * Checks whether the title field, which is required, is empty.
   * If we can proceed, this method saves the state passes the
   * newly created or updated TODO to the parent component.
   * @param formData  {{text: string, description: string, date: string}}
   * an object containing the title, description and date state for todo
   */
  saveForm = formData => {
    if (formData.text) {
      this.props.saveForm(formData);
    } else {
      Alert.alert('Title missing', 'Please insert a title.');
    }
  };

  /**
   * Closes the modal window. This is used when the cancel button is pressed.
   */
  cancelForm = () => {
    this.props.setModalVisibility(false);
  };

  /**
   * Clears the currently chosen date.
   */
  clearDate = () => {
    this.setState({
      date: '',
    });
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.title}>
            {this.props.currentTodo ? 'Edit todo' : 'Create a new todo'}
          </Text>
          <Form>
            <Text style={styles.label}>Title</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              returnKeyType="done"
              onChangeText={this.handleTitlePicked}
              value={this.state.text}
            />
            <Text style={styles.warning}>
              {this.state.text === '' ? 'This field is required' : ''}
            </Text>
            <Text style={styles.label}>Description</Text>
            <Textarea
              rowSpan={3}
              underlineColorAndroid="transparent"
              style={[styles.input, styles.multiline]}
              onChangeText={this.handleDescriptionPicked}
              value={this.state.description}
            />
            <Text style={styles.label}>Date</Text>
            <Card transparent style={styles.dateCont}>
              <Icon.FontAwesome
                name="calendar"
                size={40}
                color="#CCC"
                onPress={this.showDateTimePicker}
              />
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
                mode="datetime"
                datePickerModeAndroid="spinner"
              />
              <Text style={styles.text}>
                {this.state.date === '' ? 'No date selected' : this.state.date}
              </Text>
              <Button
                onPress={this.clearDate}
                style={[styles.button, styles.cancelBtn]}
              >
                <Text style={styles.btnText}>Clear</Text>
              </Button>
            </Card>
          </Form>
        </Content>
        <Footer transparent style={styles.btnContainer}>
          <Button
            style={[styles.saveBtn, styles.button]}
            onPress={() =>
              this.saveForm({
                text: this.state.text,
                description: this.state.description,
                date: this.state.date,
              })
            }
          >
            <Text style={styles.btnText}>Save</Text>
          </Button>
          <Button
            style={[styles.cancelBtn, styles.button]}
            onPress={() => this.cancelForm(false)}
          >
            <Text style={styles.btnText}>Cancel</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    alignSelf: 'center',
    fontSize: 24,
  },

  label: {
    fontSize: 20,
    color: '#777',
    fontWeight: 'bold',
    marginTop: 20,
  },

  input: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },

  multiline: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 7,
    borderRadius: 5,
  },

  warning: {
    color: '#f00',
  },

  dateCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderTopWidth: 0,
  },

  btnText: {
    color: '#fff',
  },

  button: {
    padding: 15,
    borderRadius: 10,
  },

  saveBtn: {
    backgroundColor: '#2f95dc',
  },

  cancelBtn: {
    backgroundColor: '#f00',
  },
});

export default TodoSchema;
