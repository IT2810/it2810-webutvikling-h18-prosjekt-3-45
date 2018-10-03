import React, {Component} from 'react'
import { FormLabel, Button, FormInput, FormValidationMessage } from 'react-native-elements'
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class TodoSchema extends Component {

  /**
   * States:
   * isDateTimePickerVisible is whether the datepicker modal is visible or not
   * title is the textinput from user
   * description is the textinput from user (optional)
   * date is the dateinput from user (optional)
   *
   * @type {{isDateTimePickerVisible: boolean, title: string, description: string, date: string}}
   */
  state = {
    isDateTimePickerVisible: false,
    title: "",
    description: "",
    date: "",
  };

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
   * @param title     title for todo
   */
  handleTitlePicked = (title) => {
    this.setState({
      title: title,
    })
  };

  /**
   * Sets the descriptionstate based on input from user
   * @param description     description for todo
   */
  handleDescriptionPicked = (description) => {
    this.setState({
      description: description,
    })
  };

  /**
   * Sets the datestate based on input from user
   * @param date     date for todo
   */
  handleDatePicked = (date) => {
    this.setState({
      date: date.toLocaleString(),
    });
    this.hideDateTimePicker();
  };

  /**
   * Checks whether the required field is empty
   * Saves the state for a todo created by user input.
   * Uses the prop saveForm from TodoAdder
   * @param frmObject  {{title: string, description: string, date: string}}
   * an object containing the title, description and date state for todo
   */
  saveForm = (frmObject) => {
    frmObject.title === "" ? alert("empty title") : this.props.saveForm(frmObject);
  };

  /**
   * Closes the modal window to the form  (cancel todo registration)
   * Uses the prop hideModule from TodoAdder
   * @param state
   */
  cancelForm = (state) => {
    this.props.hideModule(state);
  };

  render() {
    return (
      <ScrollView>
        <Text>Create a new todo</Text>
        <FormLabel>
          Title
        </FormLabel>
        <FormInput
          placeholder={"Do delivery .."}
          onChangeText={this.handleTitlePicked}
          value={this.state.title}
        />
        { this.state.title === "" &&
          <FormValidationMessage>
            {'This field is required'}
          </FormValidationMessage>
        }
        <FormLabel>
          Description
        </FormLabel>
        <FormInput
          placeholder={"Also remember to bring the books ..."}
          onChangeText={this.handleDescriptionPicked}
          value={this.state.description}
          multiline={true}
        />
        <FormLabel>Date</FormLabel>
        <TouchableOpacity onPress={this.showDateTimePicker}>
          <Text>{'CalenderICON'}</Text>
        </TouchableOpacity>
        <View>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            mode={'datetime'}
            datePickerModeAndroid={'calendar'}
          />
          <Text>{this.state.date}</Text>
        </View>

        <View>
          <Button title={'Save'} onPress={() => this.saveForm({
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
          })} />

          <Button title={'Cancel'} onPress={() => this.cancelForm(false)}/>
        </View>
      </ScrollView>
    )
  }
}