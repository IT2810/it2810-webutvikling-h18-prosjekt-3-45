import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Alert,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Icon } from 'expo';

export default class TodoSchema extends Component {
  /**
   * States:
   * isDateTimePickerVisible is whether the datepicker modal is visible or not
   * text is the title of todo from textinput from user
   * description is the textinput from user (optional)
   * date is the dateinput from user (optional)
   *
   * @type {{isDateTimePickerVisible: boolean, text: string, description: string, date: string}}
   */
  state = {
    isDateTimePickerVisible: false,
    text: '',
    description: '',
    date: '',
  };

  constructor(props) {
    super(props);

    // The current todo object being edited with its current values
    let curTodo = this.props.currentTodo;

    // Update the state of schema with current todo values if existing
    if (curTodo !== undefined) {
      this.state = {
        text: curTodo.text,
        description: curTodo.description,
        date: curTodo.date,
      };
    }
  }

  /**
   * The DateTimePicker is taken from mmazzarolo at Github, but this has been modified to match
   * our personal interests
   * Source: https://github.com/mmazzarolo/react-native-modal-datetime-picker
   */
  // Toggle states which decides whether the datetimepicker should be visible
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  /**
   * Sets the titlestate based on input from user
   * @param title   string     title for todo
   */
  handleTitlePicked = title => {
    this.setState({
      text: title,
    });
  };

  /**
   * Sets the descriptionstate based on input from user
   * @param description   string     description for todo
   */
  handleDescriptionPicked = description => {
    this.setState({
      description: description,
    });
  };

  /**
   * Sets the datestate based on input from user
   * @param date    string     date for todo
   */
  handleDatePicked = date => {
    this.setState({
      date: date
        .toLocaleString()
        .substring(0, date.toLocaleString().length - 3),
    });
    this.hideDateTimePicker();
  };

  /**
   * Checks whether the required field is empty
   * Saves the state for a todo created by user input.
   * Uses the prop saveForm from todoadder
   * @param frmObject  {{text: string, description: string, date: string}}
   * an object containing the title, description and date state for todo
   */
  saveForm = frmObject => {
    if (frmObject.text === '') {
      Alert.alert('Title missing', 'Please insert a title.');
    } else {
      this.props.saveForm(frmObject);
    }
  };

  /**
   * Closes the modal window to the form  (cancel todo registration)
   * Uses the prop hideModule from todoadder
   */
  cancelForm = state => {
    this.props.hideModule(state);
  };

  /**
   * Clears the date of todoform when pressing clear
   */
  clearDate = () => {
    this.setState({
      date: '',
    });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={64}
      >
        <View style={styles.subcontainer}>
          <View style={styles.subsubcontainer}>
            <Text style={styles.title}>
              {this.state.text === '' &&
              this.state.description === '' &&
              this.state.date === ''
                ? 'Create a new todo'
                : 'Edit todo'}
            </Text>
            <Text style={styles.label}>Title</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
              returnKeyType="done"
              placeholder={'Do delivery ..'}
              onChangeText={this.handleTitlePicked}
              value={this.state.text}
            />
            <Text style={styles.warning}>
              {this.state.text === '' ? 'This field is required' : ''}
            </Text>
            <Text style={styles.label}>Description</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={[styles.input, styles.multiline]}
              placeholder={'Also remember to bring the books ...'}
              onChangeText={this.handleDescriptionPicked}
              value={this.state.description}
              multiline={true}
            />
            <Text style={styles.label}>Date</Text>
            <View style={styles.dateCont}>
              <View>
                <Icon.FontAwesome
                  name="calendar"
                  size={40}
                  color={'#ccc'}
                  onPress={this.showDateTimePicker}
                />
                <View>
                  <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    mode={'datetime'}
                    datePickerModeAndroid={'spinner'}
                  />
                </View>
              </View>
              <Text style={styles.text}>
                {this.state.date === '' ? 'XX.XX.20XX, XX:XX' : this.state.date}
              </Text>
              <View>
                <TouchableHighlight
                  onPress={this.clearDate}
                  style={[styles.button, styles.cancelBtn]}
                >
                  <Text style={styles.btnText}>Clear</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <View>
              <TouchableHighlight
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
              </TouchableHighlight>
            </View>
            <View>
              <TouchableHighlight
                style={[styles.cancelBtn, styles.button]}
                onPress={() => this.cancelForm(false)}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  subcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
